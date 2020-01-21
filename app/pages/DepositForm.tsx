import React, {Component} from 'react';
import { StyleSheet, Image } from 'react-native'
import StackHeader from '../components/StackHeader'
import { 
  Container,
  Icon,
  Button,
  Text,
  Form,
  Item,
  Label,
  Input,
  Content,
  CardItem,
  Card,
  Right,
  connectStyle,
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
          <Card transparent>
            <CardItem style={{backgroundColor: '#312934'}}>
              <Image source={require('../assets/icon_money.png')} style={{width: 24, height: 24}}/>
              
              <Right>
                <Text style={{color: '#FFFFFF'}}>12.5 &nbsp;XTZ</Text>
              </Right>
            </CardItem>
          </Card>
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
            <Text style={{color: '#FFFFFF'}}>{12.5 - Number(this.state.term)}</Text>
          </Content>
          
          <Button dark ><Text>Deposit</Text></Button>
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