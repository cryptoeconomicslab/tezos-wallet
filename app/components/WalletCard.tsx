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
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardPoint}>{amount}</Text>
          <Text style={styles.cardAddress}>{address}</Text>
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
  cardTitle: {
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.large,
    fontWeight: styleConstants.fontWeight.bold
  },
  cardPoint: {
    color: styleConstants.color.textWhite,
    fontSize: 70,
    textAlign: 'right'
  },
  cardAddress: {
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.base,
    textAlign: 'center',
    marginTop: styleConstants.margin.middle
  }
})

export default connectStyle('NativeBase', styles)(WalletCard)
