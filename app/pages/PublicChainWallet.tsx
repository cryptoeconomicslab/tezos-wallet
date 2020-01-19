import React, {Component} from 'react'
import { StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'
import ImageButton from '../components/ImageButton'
import { 
  Container,
  connectStyle
   } from 'native-base';

type Props = {
  navigation: any
}

type State = {
  selected2: string
}

class PublicChainWallet extends Component<Props, State> {
  rootchain = () => {
    const { navigation } = this.props
    navigation.navigate('PublicChainWallet')
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

export default connectStyle('NativeBase', styles)(PublicChainWallet)