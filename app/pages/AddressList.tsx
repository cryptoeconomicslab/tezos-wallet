import React, { Component } from 'react'
import StackHeader from '../components/StackHeader'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base'

type Props = {
  navigation: any
}

export default class AddressList extends Component<Props> {
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <StackHeader title={'AddressList'} navigation={navigation} />
      </Container>
    )
  }
}
