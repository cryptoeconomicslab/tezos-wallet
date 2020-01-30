import React, { Component } from 'react'
import { StyleSheet, ImageBackground, TouchableHighlight } from 'react-native'
import styleConstants from '../constants/styleConstants'
import { Text, connectStyle } from 'native-base'

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
    const { navigation, title, amount, address, assets, action } = this.props

    return (
      <TouchableHighlight onPress={action}>
        <ImageBackground source={assets} style={styles.card}>
          <Text style={styles.card_title}>{title}</Text>
          <Text style={styles.card_point}>{amount}</Text>
          <Text style={styles.card_address}>{address}</Text>
        </ImageBackground>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    margin: styleConstants.margin.small,
    padding: styleConstants.margin.base,
    width: 364,
    height: 200,
    alignSelf: 'center'
  },
  card_title: {
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.large,
    fontWeight: styleConstants.fontWeight.bold
  },
  card_point: {
    color: styleConstants.color.textWhite,
    fontSize: 70,
    textAlign: 'right'
  },
  card_address: {
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.base,
    textAlign: 'center',
    marginTop: styleConstants.margin.middle
  }
})

export default connectStyle('NativeBase', styles)(WalletCard)
