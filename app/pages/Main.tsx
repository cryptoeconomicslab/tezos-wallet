import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, connectStyle } from 'native-base'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'

// import { config } from 'dotenv'
// config()

import { TezosMessageUtils, TezosWalletUtil } from 'conseiljs'
// import LightClient, {
//   StateManager,
//   SyncManager,
//   CheckpointManager
// } from '@cryptoeconomicslab/plasma-light-client'

import Aggregator, {
  BlockManager,
  StateManager
} from '@cryptoeconomicslab/plasma-aggregator'

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
// import { RangeDb } from '@cryptoeconomicslab/db'

import { TzCoder } from '@cryptoeconomicslab/tezos-coder'
import { setupContext } from '@cryptoeconomicslab/context'

setupContext({
  coder: TzCoder
})

const instantiate = async (isSubmitter: boolean): Promise<Aggregator> => {
  const kvs = new InMemoryKeyValueStore(Bytes.fromString('plasma_aggregator'))
  await kvs.open()

  // TODO: fix light client interface
  const network = process.env.TEZOS_NETWORK || 'babylonnet'
  const apiKey = process.env.TEZOS_APIKEY || 'hooman'
  const url = process.env.CONCEIL_ENDPOINT || 'https://hogehoge.com'
  const tezosNodeEndpoint = process.env.TEZOS_NODE_ENDPOINT || 'https://hogehoge.com'
  if (!url) {
    throw new Error('must require CONCEIL_ENDPOINT')
  }
  if (!tezosNodeEndpoint) {
    throw new Error('must require MAIN_CHAIN_HOST')
  }
  const wallet = new TzWallet(
    await TezosWalletUtil.restoreIdentityWithSecretKey(
      process.env.PRIVATE_KEY as string
    ),
    tezosNodeEndpoint,
    {
      url,
      apiKey,
      network
    }
  )

  const stateDb = await kvs.bucket(Bytes.fromString('state'))

  const eventDb = await kvs.bucket(Bytes.fromString('event'))

  const blockDb = await kvs.bucket(Bytes.fromString('block'))

  const stateManager = new StateManager(stateDb)
  const blockManager = new BlockManager(blockDb)

  // 必要？
  // const witnessDb = await kvs.bucket(Bytes.fromString('witness'))

  const adjudicationContract = new AdjudicationContract(
    Address.from(process.env.ADJUDICATION_CONTRACT_ADDRESS || ''),
    eventDb,
    wallet
  )
  const commitmentContract = new CommitmentContract(
    Address.from(process.env.COMMITMENT_CONTRACT_ADDRESS || ''),
    eventDb,
    wallet
  )
  const erc20Contract = new ERC20Contract(
    Address.from(process.env.COMMITMENT_CONTRACT_ADDRESS || ''),
    eventDb,
    wallet
  )
  const ownershipPayoutContract = new OwnershipPayoutContract(
    Address.from(process.env.COMMITMENT_CONTRACT_ADDRESS || ''),
    eventDb,
    wallet
  )
  function tokenContractFactory(address: Address) {
    return new ERC20Contract(address, eventDb, wallet)
  }

  const mainChainEnv = process.env.MAIN_CHAIN_ENV || 'local'
  // const config = await import(`../config.${mainChainEnv}`)

  return new Aggregator(
    wallet,
    stateManager,
    blockManager,
    witnessDb,
    depositContractFactory,
    commitmentContractFactory,
    loadConfigFile(process.env.CONFIG_FILE || 'config.local.json'),
    isSubmitter
  )
}

type Props = {
  title: string
  navigation: any
}

class Main extends Component<Props> {
  async componentDidMount() {
    const lightClient = await instantiate()
    lightClient.registerToken(
      '0x01df89eeeeebf54451fac43136cb115607773acf4700',
      '0x01df89eeeeebf54451fac43136cb115607773acf4700'
    )
    console.log('start')
    await lightClient.start()
    console.log('started')

    return lightClient
  }

  rootchain = () => {
    const { navigation } = this.props
    navigation.navigate('PublicChainWallet')
  }

  childchain = () => {
    const { navigation } = this.props
    navigation.navigate('ChildchainWallet')
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <RootHeader navigation={navigation} title={'Tezos Plasma Wallet'} />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_public_chain.png')}
            title={'ꜩ - public chain'}
            amount={12.5}
            address={'0x627306090abab3a6e1400e9345bc60c78a8bef57'}
            action={this.rootchain}
          />
          <WalletCard
            assets={require('../assets/card_child_chain.png')}
            title={'ꜩ - child chain'}
            amount={12.5}
            address={'0x627306090abab3a6e1400e9345bc60c78a8bef57'}
            action={this.childchain}
          />
        </Container>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight,
    backgroundColor: styleConstants.color.primaryBlack,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

export default connectStyle('NativeBase', styles)(Main)
