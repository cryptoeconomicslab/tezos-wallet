import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';

function ListItemMapping(props) {

    console.log(props)
    return (
      props.data.map((tx) => {
        return (
          <ListItem noIndent style={{ backgroundColor: "#312934" }} key={tx.id}>
            <Left>
              <Text style={{ color: "#FFF" }} >{tx.start}→{tx.end}</Text>
            </Left>
            <Right>
              <Button hasText transparent>
                <Text>Exit</Text>
              </Button>
            </Right>
          </ListItem>
        )
      })
    )
  }


export default class ListItems extends Component {
  render() {

    const data = [
      {"id": "4", "start": 40000000, "end": 41000000, "transaction_id": "0xsdfaf123e1eeeqw"},
      {"id": "3", "start": 30000000, "end": 31000000, "transaction_id": "0xsdfaf123e1eeeqw"},
      {"id": "2", "start": 20000000, "end": 21000000, "transaction_id": "0xsdfaf123e1eeeqw"},
      {"id": "1", "start": 10000000, "end": 11000000, "transaction_id": "0xsdfaf123e1eeeqw"}
    ]
    return (
      <Content>
          <List>
            <ListItemMapping data={data} />
          </List>
        </Content>
    );
  }
}