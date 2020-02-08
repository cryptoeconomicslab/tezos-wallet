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

type Props = {
  title: string
  navigation: any
}

class StackHeaderWithCamera extends Component<Props> {
  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render() {
    const { title } = this.props

    return (
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={this.goBack}>
            <Icon type="MaterialCommunityIcons" name="arrow-left" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>{title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={console.log('qrcode')}>
            <Icon type="MaterialCommunityIcons" name="qrcode-scan" />
          </Button>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#312934',
    top: Constants.statusBarHeight
  },
  headerTitle: {
    fontSize: 16,
    textAlign: 'center'
  }
})

export default connectStyle('NativeBase', styles)(StackHeaderWithCamera)
