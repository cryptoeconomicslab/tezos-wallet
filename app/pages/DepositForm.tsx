import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  ImageBackground,
  TouchableHighlight,
  Alert,
  View
} from 'react-native'
import StackHeader from '../components/StackHeader'
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

type Props = {
  navigation: any
}

type State = {
  term: string
}

class DepositForm extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onChange = (val: string) => {
    this.setState({ term: val })
  }

  onSubmit = () => {
    const { term } = this.state
    console.log(term)

    Alert.alert(
      'Are you sure to deposit',
      `${term} ꜩ`,
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'COMFIRM',
          style: 'default',
          onPress: () => console.log('OK Pressed')
        }
      ],
      { cancelable: true }
    )
  }

  render() {
    const { navigation } = this.props
    const { term } = this.state
    return (
      <Container>
        <StackHeader title={'Deposit'} navigation={navigation} />
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
                <Text style={styles.text}>{Number(12.5 - term)} &nbsp;ꜩ</Text>
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

            {/* <Text 
            numberOfLines={1} 
            style={{color: '#FFFFFF'}}
          >_________________________________________________
          </Text>
           */}

            <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
              <ImageBackground
                source={require('../assets/button_bg_primary.png')}
                style={styles.buttonImage}
              >
                <Text style={styles.buttonLabel}>Deposit</Text>
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
  formLabel: {
    color: styleConstants.color.textWhite,
    textAlign: 'center'
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
  buttonLabel: {
    color: styleConstants.color.white,
    textAlign: 'center',
    fontSize: styleConstants.margin.base
  }
})

export default connectStyle('NativeBase', styles)(DepositForm)
