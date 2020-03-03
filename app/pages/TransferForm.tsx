import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableHighlight,
  Alert,
  View
} from 'react-native'
import StackHeaderWithCamera from '../components/StackHeaderWithCamera'
import Toastr from '../components/Toast'
import {
  Container,
  Text,
  Form,
  Item,
  Label,
  Input,
  Content,
  CardItem,
  Card,
  Right,
  Left,
  connectStyle
} from 'native-base'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'
import { l2Transfer } from '../redux/modules/l2Wallet'

type Props = {
  navigation: any
  address: string
  l2Wallet: {
    balance: number
  }
  l2Transfer: () => void
}

type State = {
  term: string
  address: string
}

type AppState = State & Props

class TransferForm extends Component<AppState> {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      address: ''
    }
  }

  onChange = (val: string) => {
    this.setState({ term: val })
  }

  onChangeAddress = (val: string) => {
    this.setState({ address: val })
  }

  onSubmit = () => {
    const { term, address } = this.state
    const { l2Transfer, navigation } = this.props

    Alert.alert(
      'Are you sure to transfer',
      `${term} ꜩ to ${address}`,
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'COMFIRM',
          style: 'default',
          onPress: () => {
            l2Transfer(term)
            navigation.navigate('ChildchainWallet')
            Toastr.showToast('success!', 'info', 2000)
          }
        }
      ],
      { cancelable: true }
    )
  }

  render() {
    const { navigation, l2Wallet } = this.props
    const { term } = this.state

    const current_value = Number(l2Wallet.balance) - Number(term)
    return (
      <Container>
        <StackHeaderWithCamera title={'Deposit'} navigation={navigation} />
        <Container style={styles.bg}>
          <Card transparent style={styles.card}>
            <CardItem style={styles.cardList}>
              <Image
                source={require('../assets/icon_money.png')}
                style={styles.icon}
              />
              <Left>
                <Text style={styles.text}>Balance</Text>
              </Left>
              <Right>
                <Text style={styles.text}>{current_value} &nbsp;ꜩ</Text>
              </Right>
            </CardItem>
          </Card>

          <Content contentContainerStyle={styles.formContent}>
            <Form style={styles.form}>
              <Label style={styles.formLabel}>Amount</Label>
              <Item inlineLabel last>
                <Label style={styles.formLabel}>ꜩ</Label>
                <Input
                  keyboardType="numeric"
                  style={styles.inputValue}
                  value={this.state.term}
                  onChangeText={val => this.onChange(val)}
                />
              </Item>
            </Form>

            <ImageBackground
              source={require('../assets/icon_arrow_down.png')}
              style={styles.imageArrow}
            ></ImageBackground>

            <Form style={styles.addressForm}>
              <Label style={styles.formLabelLeft}>To (Wallet ID)</Label>
              <Item inlineLabel last>
                <Input
                  keyboardType="email-address"
                  style={styles.inputValue}
                  value={this.state.address}
                  onChangeText={val => this.onChangeAddress(val)}
                />
              </Item>
            </Form>

            <TouchableHighlight
              disabled={current_value < 0}
              onPress={this.onSubmit}
              style={styles.button}
            >
              <ImageBackground
                source={require('../assets/button_bg_primary.png')}
                style={styles.buttonImage}
              >
                <Text style={styles.buttonLabel}>Send</Text>
              </ImageBackground>
            </TouchableHighlight>
          </Content>
        </Container>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    top: styleConstants.margin.base,
    backgroundColor: styleConstants.color.primaryBlack
  },
  card: {
    marginTop: styleConstants.margin.middle
  },
  cardList: {
    backgroundColor: styleConstants.color.secondaryBlack
  },
  mainContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContent: {
    marginTop: styleConstants.margin.large,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: 240
  },
  addressForm: {
    width: 365
  },
  formLabel: {
    color: styleConstants.color.textWhite,
    textAlign: 'center'
  },
  formLabelLeft: {
    color: styleConstants.color.textWhite,
    textAlign: 'left'
  },
  icon: {
    width: 24,
    height: 24
  },
  text: {
    color: styleConstants.color.textWhite
  },
  inputValue: {
    color: styleConstants.color.white,
    textAlign: 'right'
  },
  button: {
    marginTop: styleConstants.margin.large
  },
  buttonImage: {
    width: 365,
    height: 63,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  imageArrow: {
    margin: styleConstants.margin.base,
    width: 24,
    height: 46
  },
  buttonLabel: {
    color: styleConstants.color.white,
    textAlign: 'center',
    fontSize: styleConstants.margin.base
  }
})

const mapStateToProps = state => ({
  address: state.reducer.address,
  l2Wallet: state.reducer.l2Wallet
})

const mapDispatchToProps = {
  l2Transfer
}

export default connect(mapStateToProps, mapDispatchToProps)(connectStyle('NativeBase', styles)(TransferForm))
