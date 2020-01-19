import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'

import { 
  Container,
  Icon,
  Form,
  Item,
  Picker,
  Content,
  connectStyle
   } from 'native-base';

type Props = {
  title: string
  navigation: any
}

class ChildchainWallet extends Component<Props> {

  render() {
    const { navigation } = this.props
    
    return (
      <Container>
        <RootHeader
          navigation={navigation}
          title={'Child Chain Wallet'}
        />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_child_chain.png')}
            title={'XTZ - child chain'}
            amount={12.5}
            address={'0x627306090abab3a6e1400e9345bc60c78a8bef57'}
            action={this.rootchain}
          />
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#312934',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

export default connectStyle('NativeBase', styles)(ChildchainWallet)