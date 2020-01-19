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

    return(
      <Header style={styles.header}>
        <Left >
          <Button transparent onPress={this.goBack}>
            <Icon name='arrow-back'/>
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
    backgroundColor: '#312934'
  },
  header_title: {
    fontSize: 16,
    textAlign: 'center'    
  }
})

export default connectStyle('NativeBase', styles)(StackHeader)