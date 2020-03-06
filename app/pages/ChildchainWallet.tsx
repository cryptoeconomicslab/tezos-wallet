import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import RootHeader from '../components/RootHeader'
import WalletCard from '../components/WalletCard'
import ImageButton from '../components/ImageButton'
import ListItemMapping from '../components/ListItems'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'
import { loadL2Wallet } from '../redux/modules/l2Wallet'

import {
  Container,
  Icon,
  Form,
  Item,
  Picker,
  Content,
  List,
  Text,
  connectStyle
} from 'native-base'

type Props = {
  title: string
  navigation: any
  loadL2Wallet: () => void
}

class ChildchainWallet extends Component<Props> {
  async componentDidMount() {
    this.props.loadL2Wallet()
  }

  transferForm = () => {
    const { navigation } = this.props
    navigation.navigate('TransferForm')
  }

  render() {
    const { navigation, l2Wallet } = this.props

    const data = [
      {
        id: '4',
        start: 40000000,
        end: 41000000,
        transactionId: '0xsdfaf123e1eeeqw'
      },
      {
        id: '3',
        start: 30000000,
        end: 31000000,
        transactionId: '0xsdfaf123e1eeeqw'
      },
      {
        id: '2',
        start: 20000000,
        end: 21000000,
        transactionId: '0xsdfaf123e1eeeqw'
      },
      {
        id: '1',
        start: 10000000,
        end: 11000000,
        transactionId: '0xsdfaf123e1eeeqw'
      }
    ]

    return (
      <Container>
        <RootHeader navigation={navigation} title={'Child Chain Wallet'} />
        <Container style={styles.bg}>
          <WalletCard
            assets={require('../assets/card_child_chain.png')}
            title={'ꜩ - child chain'}
            amount={l2Wallet.balance}
            address={'tz1X3xW1EcS48RQXSdrDTF6xESm933eq251f'}
            action={this.rootchain}
          />
          <ImageButton
            title="Transfer ꜩ"
            action={this.transferForm}
            type={'transfer'}
          />
          <Content>
            <Text style={styles.listLabel}>UTXO</Text>
            <List style={styles.listArea}>
              <ListItemMapping data={data} />
            </List>
          </Content>
        </Container>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight,
    backgroundColor: styleConstants.color.primaryBlack
  },
  listLabel: {
    margin: styleConstants.margin.small,
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.middle,
    fontWeight: styleConstants.fontWeight.bold
  },
  listArea: {
    // padding: styleConstants.margin.base,
    // backgroundColor: styleConstants.color.secondaryBlack
  }
})

const mapStateToProps = state => ({
  address: state.reducer.address,
  l2Wallet: state.reducer.l2Wallet
})

const mapDispatchToProps = {
  loadL2Wallet
}


export default connect(mapStateToProps, mapDispatchToProps)(connectStyle('NativeBase', styles)(ChildchainWallet))
