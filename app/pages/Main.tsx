import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
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
            <Title>メイン</Title>
          </Body>
          <Right />
        </Header>
        <Container style={styles.bg}>
        <Button iconRight primary onPress={this.push} style={styles.button}>
            <Text>プッシュ表示</Text>
          </Button>
        <View>
          <Button iconRight primary onPress={this.modal} style={styles.button}>
            <Text>モーダル表示</Text>
          </Button>
        </View>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#312934'
  },
  button: {
    backgroundColor: '#312934'
  },
  bg: {
    backgroundColor: '#312934'
  }
})

export default connectStyle('NativeBase', styles)(Main)