import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Container, connectStyle } from 'native-base'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'

// import {
//   ConseilDataClient,
//   ConseilFunction,
//   ConseilQueryBuilder,
//   ConseilOperator,
//   TezosLanguageUtil
// } from 'conseiljs'

// const amount = async () => {
//   const platform = 'tezos'
//   const network = 'babylonnet'
//   const entity = 'accounts'

//   const address = 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5'
//   const conseilServer = {
//     url: 'https://conseil-dev.cryptonomic-infra.tech',
//     apiKey: 'BUIDLonTezos-001',
//     network: network
//   }

//   let accountQuery = ConseilQueryBuilder.blankQuery()
//   accountQuery = ConseilQueryBuilder.addFields(
//     accountQuery,
//     'account_id',
//     'balance'
//   )
//   accountQuery = ConseilQueryBuilder.addPredicate(
//     accountQuery,
//     'account_id',
//     ConseilOperator.EQ,
//     [address]
//   )
//   accountQuery = ConseilQueryBuilder.addAggregationFunction(
//     accountQuery,
//     'balance',
//     ConseilFunction.sum
//   )
//   accountQuery = ConseilQueryBuilder.setLimit(accountQuery, 1)

//   const result = await ConseilDataClient.executeEntityQuery(
//     conseilServer,
//     platform,
//     network,
//     entity,
//     accountQuery
//   )
//   console.log(result[0].sum_balance)
// }
// amount()
// import { TzWalletFactory } from '@cryptoeconomicslab/tezos-wallet'
// import { Bytes } from '@cryptoeconomicslab/primitives'

// let factory = new TzWalletFactory()
// let wallet = factory.fromPrivateKey(
//   'edskRpVqFG2FHo11aB9pzbnHBiPBWhNWdwtNyQSfEEhDf5jhFbAtNS41vg9as7LSYZv6rEbtJTwyyEg9cNDdcAkSr9Z7hfvquB'
// )

type Props = {
  title: string
  navigation: any
}

class Main extends Component<Props> {
  async componentDidMount() {

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
    const { navigation, address } = this.props

    return (
      <Container>
        <RootHeader navigation={navigation} title={'Tezos Plasma Wallet'} />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_public_chain.png')}
            title={'ꜩ - public chain'}
            amount={12.5}
            address={address.address}
            action={this.rootchain}
          />
          <WalletCard
            assets={require('../assets/card_child_chain.png')}
            title={'ꜩ - child chain'}
            amount={12.5}
            address={address.address}
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

const mapStateToProps = state => ({
  address: state.reducer.address,
})

export default connect(mapStateToProps)(connectStyle('NativeBase', styles)(Main))