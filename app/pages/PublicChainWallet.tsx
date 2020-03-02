import React, { Component } from 'react'
import { StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'
import ImageButton from '../components/ImageButton'
import TransactionLabel from '../components/TransactionLabel'
import Toastr from '../components/Toast'

import { Container, connectStyle, Button, Text } from 'native-base'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'

type Props = {
  navigation: any
}

type State = {
  showToast: boolean
}

class PublicChainWallet extends Component<Props, State> {
  rootchain = () => {
    const { navigation } = this.props
    navigation.navigate('PublicChainWallet')
  }

  depositForm = () => {
    const { navigation } = this.props
    navigation.navigate('DepositForm')
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <RootHeader navigation={navigation} title={'Public Chain'} />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_public_chain.png')}
            title={'ꜩ - public chain'}
            amount={12.5}
            address={'tz1X3xW1EcS48RQXSdrDTF6xESm933eq251f'}
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

export default connectStyle('NativeBase', styles)(PublicChainWallet)
