import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'
import ImageButton from '../components/ImageButton'
import TransactionLabel from '../components/TransactionLabel'
import Toastr from '../components/Toast'

import { Container, connectStyle, Button, Text } from 'native-base'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'
import { loadL1Wallet } from '../redux/modules/l1Wallet'
import { AsyncStorage } from 'react-native'

type Props = {
  navigation: any
  address: {
    address: string
  }
  loadL1Wallet: () => void
}

type State = {
  showToast: boolean
}

class PublicChainWallet extends Component<Props, State> {
  componentDidMount() {
    this.props.loadL1Wallet()
  }

  rootchain = () => {
    const { navigation } = this.props
    navigation.navigate('PublicChainWallet')
  }

  depositForm = () => {
    const { navigation } = this.props
    navigation.navigate('DepositForm')
  }

  render() {
    const { navigation, address, l1Wallet } = this.props

    return (
      <Container>
        <RootHeader navigation={navigation} title={'Public Chain'} />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_public_chain.png')}
            title={'ꜩ - public chain'}
            amount={l1Wallet.balance}
            address={address.address}
            action={this.rootchain}
          />
          <ImageButton
            title="Deposit ꜩ"
            action={this.depositForm}
            type={'deposit'}
          />
          <TransactionLabel title="Deposit ꜩ" type={'tracsaction'} />
          <TransactionLabel title="Deposit ꜩ" type={'tracsaction'} />
        </Container>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight,
    backgroundColor: styleConstants.color.primaryBlack,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  address: state.reducer.address,
  l1Wallet: state.reducer.l1Wallet
})

const mapDispatchToProps = {
  loadL1Wallet
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(connectStyle('NativeBase', styles)(PublicChainWallet))
