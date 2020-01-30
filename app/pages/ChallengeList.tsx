import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import StackHeader from '../components/StackHeader'
import ListItemMapping from '../components/ListItems'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'

import {
  Container,
  Icon,
  Form,
  Item,
  Picker,
  Content,
  List,
  Text,
  connectStyle
} from 'native-base'

type Props = {
  navigation: any
}

export default class ChallengeList extends Component<Props> {
  render() {
    const { navigation } = this.props

    const data = [
      {
        id: '4',
        start: 40000000,
        end: 41000000,
        transaction_id: '0xsdfaf123e1eeeqw'
      },
      {
        id: '3',
        start: 30000000,
        end: 31000000,
        transaction_id: '0xsdfaf123e1eeeqw'
      },
      {
        id: '2',
        start: 20000000,
        end: 21000000,
        transaction_id: '0xsdfaf123e1eeeqw'
      },
      {
        id: '1',
        start: 10000000,
        end: 11000000,
        transaction_id: '0xsdfaf123e1eeeqw'
      }
    ]

    return (
      <Container>
        <StackHeader title={'ChallengeList'} navigation={navigation} />
        <Container style={styles.bg}>
          <Content>
            <Text style={styles.listLabel}>UTXO</Text>
            <List style={styles.listArea}>
              <ListItemMapping data={data} />
            </List>
          </Content>
        </Container>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight,
    backgroundColor: styleConstants.color.primaryBlack
  },
  listLabel: {
    margin: styleConstants.margin.small,
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.middle,
    fontWeight: styleConstants.fontWeight.bold
  },
  listArea: {
    // padding: styleConstants.margin.base,
    // backgroundColor: styleConstants.color.secondaryBlack
  }
})

export default connectStyle('NativeBase', styles)(ChallengeList)
