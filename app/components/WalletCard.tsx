import React, {Component} from 'react'
import { StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import { 
  Text,
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

class WalletCard extends Component<Props> {
  render() {
    const { 
      navigation, 
      title, 
      amount, 
      address, 
      assets, 
      action } = this.props
    
    return (
      <TouchableHighlight onPress={action}>
        <ImageBackground 
          source={assets} 
          style={styles.card}
        >
          <Text style={styles.card_title}>{title}</Text>
          <Text style={styles.card_point}>{amount}</Text>
          <Text style={styles.card_address}>{address}</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 8,
    width: 364,
    height: 200
  },
  card_title: {
    color: 'rgba(255, 255, 255 ,0.5)',
    fontSize: 20,
  },
  card_point: {
    color: 'rgba(255, 255, 255 ,0.5)',
    fontSize: 70,
    textAlign: 'right'
  },
  card_address: {
    color: 'rgba(255, 255, 255 ,0.5)',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 32
  }
})

export default connectStyle('NativeBase', styles)(WalletCard)