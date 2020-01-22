import React, {Component} from 'react';
import { StyleSheet, Image, ImageBackground, TouchableHighlight, Alert } from 'react-native'
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

  onSubmit = () => {
    const { term } = this.state
    console.log(term)

    Alert.alert(
      'Are you sure to deposit',
      `${term} XTZ`,
      [
        {
          text: 'CANCEL',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'COMFIRM',
          style: 'default', 
          onPress: () => console.log('OK Pressed')
          },
      ],
      {cancelable: true},
    );
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

            <TouchableHighlight onPress={this.onSubmit}>
              <ImageBackground 
                source={require('../assets/button_bg_primary.png')} 
                style={{width: 365, height: 63, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
              >
                <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 16}}>Deposit</Text>
              </ImageBackground>
            </TouchableHighlight>
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