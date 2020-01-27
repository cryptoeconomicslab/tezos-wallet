import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'
import ImageButton from '../components/ImageButton'
import ListItemMapping from '../components/ListItems'
import Constants from 'expo-constants';
import styleConstants from '../constants/styleConstants'

import { 
  Container,
  Icon,
  Form,
  Item,
  Picker,
  Content,
  List,

  connectStyle
   } from 'native-base';

type Props = {
  title: string
  navigation: any
}

class ChildchainWallet extends Component<Props> {

  sendForm = () => {
    const { navigation } = this.props
    navigation.navigate('main')
  }

  render() {
    const { navigation } = this.props

    const data = [
      {"id": "4", "start": 40000000, "end": 41000000, "transaction_id": "0xsdfaf123e1eeeqw"},
      {"id": "3", "start": 30000000, "end": 31000000, "transaction_id": "0xsdfaf123e1eeeqw"},
      {"id": "2", "start": 20000000, "end": 21000000, "transaction_id": "0xsdfaf123e1eeeqw"},
      {"id": "1", "start": 10000000, "end": 11000000, "transaction_id": "0xsdfaf123e1eeeqw"}
    ]
    
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
          <ImageButton
            title='Transfer XTZ'
            action={this.sendForm}
            type={'send'}
          />
          <Content>
            <List>
              <ListItemMapping data={data} />
            </List>
          </Content>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight,
    backgroundColor: styleConstants.color.primaryBlack,
  }
})

export default connectStyle('NativeBase', styles)(ChildchainWallet)