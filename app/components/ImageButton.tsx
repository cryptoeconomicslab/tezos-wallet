import React, {Component} from 'react'
import { StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import { 
  Text,
  Image,
  connectStyle
  } from 'native-base'

type Props = {
  title: string
  amount: number
  address: string
  navigation: any
  assets: () => void
  action: () => void
}

class ImageButton extends Component<Props> {
  depositForm = () => {
    const { navigation } = this.props
    navigation.navigate('DepositForm')
  } 

  render() {
    const { 
      navigation, 
      title, 
      amount, 
      address, 
      assets, 
      action } = this.props
    
    return (
      <TouchableHighlight onPress={this.depositForm}>
        <ImageBackground 
          source={require('../assets/button_bg_deposit.png')} 
          style={styles.button}
        >
          <ImageBackground 
            source={require('../assets/transaction_receive.png')} 
            style={styles.buttonIcon}
          ></ImageBackground>
          <Text style={styles.label}>Deposit</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 32,
    padding: 8,
    width: 372,
    height: 88
  },
  label: {
    color: 'rgba(255, 255, 255 ,0.5)',
    fontSize: 20,
    marginLeft: 86,
    marginRight: 'auto'
  },
  buttonIcon:{
    width: 70,
    height: 70
  }
})

export default connectStyle('NativeBase', styles)(ImageButton)