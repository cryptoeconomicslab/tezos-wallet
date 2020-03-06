import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Container, connectStyle } from 'native-base'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'
import { loadL1Wallet } from '../redux/modules/l1Wallet'
import { loadL2Wallet } from '../redux/modules/l2Wallet'

import initialize from '../initialize'
import { PRIVATE_KEY } from 'react-native-dotenv'

type Props = {
  title: string
  navigation: any
  loadL1Wallet: () => void
  loadL2Wallet: () => void
}

class Main extends Component<Props> {
  async componentDidMount() {

    initialize(PRIVATE_KEY)
    this.props.loadL1Wallet()
    this.props.loadL2Wallet()
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
    const { navigation, address, l1Wallet, l2Wallet } = this.props

    return (
      <Container>
        <RootHeader navigation={navigation} title={'Tezos Plasma Wallet'} />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_public_chain.png')}
            title={'ꜩ - public chain'}
            amount={l1Wallet.balance}
            address={address.address}
            action={this.rootchain}
          />
          <WalletCard
            assets={require('../assets/card_child_chain.png')}
            title={'ꜩ - child chain'}
            amount={l2Wallet.balance}
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
  l1Wallet: state.reducer.l1Wallet,
  l2Wallet: state.reducer.l2Wallet
})

const mapDispatchToProps = {
  loadL1Wallet,
  loadL2Wallet
}


export default connect(mapStateToProps, mapDispatchToProps)(connectStyle('NativeBase', styles)(Main))

