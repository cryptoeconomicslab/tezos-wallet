import React, {Component} from 'react'
import { StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'
import ImageButton from '../components/ImageButton'
import Toastr from '../components/Toast'

import { 
  Container,
  connectStyle,
  Button,
  Text
   } from 'native-base';
import Constants from 'expo-constants';
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

  onTransactionSuccess = () => {
    Toastr.showToast('Success', 'success', 2000);
  }

  depositForm = () => {
    const { navigation } = this.props
    navigation.navigate('DepositForm')
  } 

  render() {
    const { navigation } = this.props
    
    return (
      <Container>
        <RootHeader
          navigation={navigation}
          title={'Public Chain'}
        />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_public_chain.png')}
            title={'XTZ - public chain'}
            amount={12.5}
            address={'0x627306090abab3a6e1400e9345bc60c78a8bef57'}
            action={this.rootchain}
          />
          <ImageButton
            title='Deposit'
            action={this.depositForm}
            type={'deposit'}
          />
          {/* あとで消す */}
          <Button onPress={this.onTransactionSuccess}><Text>toast</Text></Button>
        </Container>
      </Container>
    );
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