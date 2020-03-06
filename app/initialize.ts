import { AsyncStorage } from 'react-native'
import {
  PRIVATE_KEY,
  MAIN_CHAIN_ENV,
  TEZOS_NETWORK,
  TEZOS_APIKEY,
  CONCEIL_ENDPOINT,
  TEZOS_NODE_ENDPOINT,
  COMMITMENT_CONTRACT_ADDRESS,
  UNIVERSAL_ADJUDICATION_CONTRACT_ADDRESS
} from 'react-native-dotenv'

import { TezosMessageUtils, TezosWalletUtil } from 'conseiljs'

import LightClient, {
  StateManager,
  SyncManager,
  CheckpointManager
} from '@cryptoeconomicslab/plasma-light-client'

import {
  AdjudicationContract,
  DepositContract,
  CommitmentContract,
  ERC20Contract,
  OwnershipPayoutContract
} from '@cryptoeconomicslab/tezos-contract'

import { TzWallet } from '@cryptoeconomicslab/tezos-wallet'

import { Address, Bytes } from '@cryptoeconomicslab/primitives'

import { InMemoryKeyValueStore } from '@cryptoeconomicslab/level-kvs'

import { TzCoder } from '@cryptoeconomicslab/tezos-coder'
import { setupContext } from '@cryptoeconomicslab/context'

setupContext({
  coder: TzCoder
})

async function instantiate(privateKey) {
  const kvs = new InMemoryKeyValueStore(
    Bytes.fromString('tezos-liteclient-cli'),
  )

  const network = TEZOS_NETWORK || 'babylonnet'
  const apiKey = TEZOS_APIKEY || 'hooman'
  const url = CONCEIL_ENDPOINT || 'https://hogehoge.com'
  const tezosNodeEndpoint = TEZOS_NODE_ENDPOINT || 'https://hogehoge.com'
  if (!url) {
    throw new Error('must require CONCEIL_ENDPOINT')
  }
  if (!tezosNodeEndpoint) {
    throw new Error('must require MAIN_CHAIN_HOST')
  }
  const wallet = new TzWallet(
    await TezosWalletUtil.restoreIdentityWithSecretKey(
      privateKey as string
    ),
    tezosNodeEndpoint,
    {
      url,
      apiKey,
      network
    }
  )

  function depositContractFactory(address) {
    return new DepositContract(address, eventDb, wallet)
  }

  const eventDb = await kvs.bucket(Bytes.fromString('event'))
  const stateDb = await kvs.bucket(Bytes.fromString('state'))
  const stateManager = new StateManager(stateDb)

  const syncDb = await kvs.bucket(Bytes.fromString('sync'))
  const syncManager = new SyncManager(syncDb)

  const checkpointDb = await kvs.bucket(Bytes.fromString('checkpoint'))
  const checkpointManager = new CheckpointManager(checkpointDb)


  const adjudicationContract = new AdjudicationContract(
    Address.from(UNIVERSAL_ADJUDICATION_CONTRACT_ADDRESS || ''),
    eventDb,
    wallet
  )
  const commitmentContract = new CommitmentContract(
    Address.from(COMMITMENT_CONTRACT_ADDRESS || ''),
    eventDb,
    wallet
  )
  const erc20Contract = new ERC20Contract(
    Address.from(COMMITMENT_CONTRACT_ADDRESS || ''),
    eventDb,
    wallet
  )
  const ownershipPayoutContract = new OwnershipPayoutContract(
    Address.from(COMMITMENT_CONTRACT_ADDRESS || ''),
    eventDb,
    wallet
  )
  function tokenContractFactory(address: Address) {
    return new ERC20Contract(address, eventDb, wallet)
  }

  const mainChainEnv = MAIN_CHAIN_ENV || 'local'
  const config = await import('./config.local.json')

  return new LightClient(
    wallet,
    kvs,
    adjudicationContract,
    depositContractFactory,
    tokenContractFactory,
    commitmentContract,
    ownershipPayoutContract,
    stateManager,
    syncManager,
    checkpointManager,
    config
  )
}

export default async function initialize(privateKey) {
  const lightClient = await instantiate(privateKey)
  await lightClient.start()

  await AsyncStorage.setItem('privateKey', privateKey)

  return lightClient
}
