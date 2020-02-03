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

class StackHeader extends Component<Props> {
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
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.headerTitle}>{title}</Title>
        </Body>
        <Right />
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

export default connectStyle('NativeBase', styles)(StackHeader)
