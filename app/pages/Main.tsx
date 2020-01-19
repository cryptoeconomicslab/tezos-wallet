import React, {Component} from 'react'
import { StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import { 
  Container,
  Text,
  connectStyle
  } from 'native-base'
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

  modal = () => {
    const { navigation } = this.props
    navigation.navigate('PublicChainWallet')
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
  button: {
    backgroundColor: '#312934'
  },
  bg: {
    backgroundColor: '#312934',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

export default connectStyle('NativeBase', styles)(Main)