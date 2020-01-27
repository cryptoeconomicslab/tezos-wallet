import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { 
  ListItem, 
  Text, 
  Left, 
  Right, 
  Button,
  connectStyle
} from 'native-base';
import styleConstants from '../constants/styleConstants'


const ListItemMapping = React.memo((props) => {
    console.log(props)
    return (
      props.data.map(({id, start, end, transaction_id}) => {
        return (
          <ListItem noIndent style={styles.listItem} key={id}>
            <Left>
              <Text style={styles.listLabel} >{start} → {end}</Text>
            </Left>
            <Right>
              <Button hasText transparent onPress={() => console.log(id)}>
                <Text style={styles.listButtonLabel}>Exit</Text>
              </Button>
            </Right>
          </ListItem>
        )
      })
    )
})

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: styleConstants.color.primaryBlack,
    borderColor: styleConstants.color.primaryBlack,
  },
  listLabel: {
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.base
  },
  listButtonLabel: {
    color: styleConstants.color.primary,
    fontSize: styleConstants.fontSize.base
  }
})

export default connectStyle('NativeBase', styles)(ListItemMapping)