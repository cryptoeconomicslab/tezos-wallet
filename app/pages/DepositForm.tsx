import React, {Component} from 'react';
import { StyleSheet } from 'react-native'
import StackHeader from '../components/StackHeader'
import { 
  Container,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input,
  Content,
  connectStyle
   } from 'native-base';

type Props = {
  navigation: any
}

type State = {
  term: string
}

class DepositForm extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onChange = (val: string) =>  {
    this.setState({term: val})
  }

  render() {
    const { navigation } = this.props  
    return (
      <Container>    
        <StackHeader 
          title={'Deposit'}
          navigation={navigation}
        />
        <Container style={{backgroundColor: '#312934'}}>
          <Content>
            <Form>
              <Item stackedLabel last>
                <Label style={{color: '#FFFFFF'}}>Amount</Label>
                <Input
                  keyboardType="numeric"
                  style={{color: '#FFFFFF'}}
                  value={this.state.term}
                  onChangeText={(val) => this.onChange(val)}
                />
              </Item>
            </Form>
            <Text>{this.state.term}</Text>
          </Content>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#312934',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})

export default connectStyle('NativeBase', styles)(DepositForm)