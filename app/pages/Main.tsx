import React, {Component} from 'react'
import { StyleSheet, Image, ImageBackground, TouchableHighlight } from 'react-native'
import { 
  Container,
  View,
  Header, 
  Left, 
  Body, 
  Right, 
  Button, 
  Title, 
  Text,
  Icon,
  StyleProvider,
  connectStyle

  } from 'native-base'
import getTheme from '../native-base-theme/components'
import headerTheme from '../native-base-theme/components'
import commonColor from '../native-base-theme/variables/commonColor';

type Props = {}
class Main extends Component<Props> {
  push = () => {
    const { navigation } = this.props
    navigation.navigate('Push')
  }
  modal = () => {
    const { navigation } = this.props
    navigation.navigate('Modal')
  }

  menu = () => {
    const { navigation } = this.props
    navigation.openDrawer()
  }

  static navigationOptions = {
      title: 'hogehoge'
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left >
            <Button transparent onPress={this.menu}>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.header_title}>Tezos Plasma Wallet</Title>
          </Body>
          <Right />
        </Header>
        <Container style={styles.bg}>
        
        <TouchableHighlight onPress={this.push}>
          <ImageBackground 
            source={require('../assets/card_public_chain.png')} 
            style={styles.card}
          >
            <Text style={styles.card_title}>XTZ - public chain</Text>
            <Text style={styles.card_point}>12.5</Text>
            <Text style={styles.card_text}>0x627306090abab3a6e1400e9345bc60c78a8bef57</Text>
          </ImageBackground>
        </TouchableHighlight>

      <TouchableHighlight onPress={this.modal}>
        <ImageBackground 
          source={require('../assets/card_child_chain.png')} 
          style={styles.card}
        >
          <Text style={styles.card_title}>XTZ - child chain</Text>
          <Text style={styles.card_point}>12.5</Text>
          <Text style={styles.card_text}>0x627306090abab3a6e1400e9345bc60c78a8bef57</Text>
        </ImageBackground>
      </TouchableHighlight>
        
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#312934'
  },
  header_title: {
    fontSize: 16,
    textAlign: 'center'    
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
  card_text: {
    color: 'rgba(255, 255, 255 ,0.5)',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 32
  },
  button: {
    backgroundColor: '#312934'
  },
  bg: {
    backgroundColor: '#312934',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  card: {
    margin: 8,
    padding: 8,
    width: 364,
    height: 200
  }
})

export default connectStyle('NativeBase', styles)(Main)