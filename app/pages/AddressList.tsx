import React, {Component} from 'react';
import StackHeader from '../components/StackHeader'
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
    const { navigation } = this.props
    return (
      <Container>
        <StackHeader 
          title={'AddressList'}
          navigation={navigation}
        />
      </Container>
    );
  }
}