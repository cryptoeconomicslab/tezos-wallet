import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
  connectStyle
} from 'native-base'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'

type Props = {
  title: string
  navigation: any
}

class RootHeader extends Component<Props> {
  menu = () => {
    const { navigation } = this.props
    navigation.openDrawer()
  }

  camera = () => {
    const { navigation } = this.props
    navigation.navigate('QrcodeScanner')
  }

  showQr = () => {
    const { navigation } = this.props
    navigation.navigate('ShowQr')
  }

  render() {
    const { title } = this.props

    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={this.menu}>
            <Icon type="MaterialCommunityIcons" name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>{title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.showQr}>
            <Icon type="MaterialCommunityIcons" name="qrcode" />
          </Button>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: styleConstants.color.primaryBlack,
    top: Constants.statusBarHeight
  },
  headerTitle: {
    fontSize: 16,
    textAlign: 'center'
  }
})

export default connectStyle('NativeBase', styles)(RootHeader)
