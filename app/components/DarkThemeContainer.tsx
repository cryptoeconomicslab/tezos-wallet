// @TODO refactor React HOC
import React, {Component} from 'react'
import { StyleSheet } from 'react-native'
import { 
  Container,
  connectStyle
} from 'native-base'

type Props = {
  Children?: React.Node,
}
  
class DarkThemeContainer extends Component {
  render() {
    return (
      <Container style={styles.bg}>
        {this.props.Children}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#312934'
  },
  bg: {
    backgroundColor: '#312934',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

export default connectStyle('NativeBase', styles)(DarkThemeContainer)
