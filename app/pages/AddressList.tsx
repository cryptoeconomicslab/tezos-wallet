import React, {Component} from 'react';
import { 
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
   } from 'native-base';

type Props = {};
export default class AddressList extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Address List</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}