import React, {Component} from 'react';
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
  Icon
  } from 'native-base';

type Props = {};
export default class Main extends Component<Props> {
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

  render() {
    return (
      <Container>
        <Header>
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
        <Container>
         <Button iconRight primary onPress={this.push}>
            <Text>プッシュ表示</Text>
          </Button>
        <View>
          <Button iconRight primary onPress={this.modal}>
            <Text>モーダル表示</Text>
          </Button>
        </View>
        </Container>
      </Container>
    );
  }
}