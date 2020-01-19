import React, {Component} from 'react'
import RootHeader from '../components/RootHeader'
import { 
  Container,
  Icon,
  Form,
  Item,
  Picker,
  Content,
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
        <Container>
        </Container>
      </Container>
    );
  }
}

export default ChildchainWallet