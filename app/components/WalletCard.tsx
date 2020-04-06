import React, { Component } from 'react'
import {
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Clipboard,
  TouchableOpacity
} from 'react-native'
import Toastr from './Toast'
import styleConstants from '../constants/styleConstants'
import { Text, Icon, connectStyle } from 'native-base'
import { BigNumber } from '@cryptoeconomicslab/primitives'

type Props = {
  title: string
  amount: BigNumber
  address: string
  navigation: any
  assets: () => void
  action: () => void
}

class WalletCard extends Component<Props> {
  setClipbord = () => {
    const { address } = this.props
    Clipboard.setString(address)
    Toastr.showToast('address copied!', 'info', 2000)
  }

  render() {
    const { navigation, title, amount, address, assets, action } = this.props

    return (
      <TouchableHighlight onPress={action}>
        <ImageBackground source={assets} style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardPoint}>{amount}</Text>
          <TouchableOpacity
            onPress={this.setClipbord}
            style={styles.cardButton}
          >
            <Text style={styles.cardAddress}>
              <Icon
                type="MaterialCommunityIcons"
                name="content-copy"
                style={styles.icon}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;{address}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    margin: styleConstants.margin.small,
    padding: styleConstants.margin.small,
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
  cardButton: {
    marginTop: styleConstants.margin.middle,
    marginLeft: 8
  },
  cardAddress: {
    fontSize: styleConstants.fontSize.base,
    color: styleConstants.color.textWhite,
    textAlign: 'left'
  },
  icon: {
    fontSize: 20,
    color: styleConstants.color.textWhite,
    margin: 4,
    alignSelf: 'stretch'
  }
})

export default connectStyle('NativeBase', styles)(WalletCard)
