import React, {Component} from 'react'
import { StyleSheet} from 'react-native'
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

  render() {
    const { title } = this.props

    return(
      <Header style={styles.header}>
        <Left >
          <Button transparent onPress={this.menu}>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
          <Title style={styles.header_title}>{title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: styleConstants.color.primaryBlack,
    top: Constants.statusBarHeight
  },
  header_title: {
    fontSize: 16,
    textAlign: 'center'
  }
})

export default connectStyle('NativeBase', styles)(RootHeader)