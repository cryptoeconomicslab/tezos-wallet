import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import { 
  Container,
  connectStyle
  } from 'native-base'
import Constants from 'expo-constants';
import styleConstants from '../constants/styleConstants'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'

type Props = {
  title: string
  navigation: any
}

class Main extends Component<Props> {
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
        <RootHeader 
          navigation={navigation}
          title={'Tezos Plasma Wallet'} 
        />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_public_chain.png')}
            title={'XTZ - public chain'}
            amount={12.5}
            address={'0x627306090abab3a6e1400e9345bc60c78a8bef57'}
            action={this.rootchain}
          />
          <WalletCard
            assets={require('../assets/card_child_chain.png')}
            title={'XTZ - child chain'}
            amount={12.5}
            address={'0x627306090abab3a6e1400e9345bc60c78a8bef57'}
            action={this.childchain}
          />
        </Container>
      </Container>
    );
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