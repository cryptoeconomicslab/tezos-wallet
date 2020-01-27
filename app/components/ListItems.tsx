import React, { Component } from 'react';
import { 
  ListItem, 
  Text, 
  Left, 
  Right, 
  Button 
} from 'native-base';

const ListItemMapping = React.memo((props) => {
    console.log(props)
    return (
      props.data.map(({id, start, end, transaction_id}) => {
        return (
          <ListItem noIndent style={{ backgroundColor: "#312934" }} key={id}>
            <Left>
              <Text style={{ color: "#FFF" }} >{start} → {end}</Text>
            </Left>
            <Right>
              <Button hasText transparent onPress={() => console.log(id)}>
                <Text>Exit</Text>
              </Button>
            </Right>
          </ListItem>
        )
      })
    )
})

export default ListItemMapping