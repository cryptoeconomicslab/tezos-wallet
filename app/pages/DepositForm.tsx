import React, {Component} from 'react';
import { StyleSheet, Image, ImageBackground, TouchableHighlight, Alert, View } from 'react-native'
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
import Constants from 'expo-constants';

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
      <Container style={{backgroundColor: '#312934'}}>    
        <StackHeader 
          title={'Deposit'}
          navigation={navigation}
        />

        <Card transparent>
          <CardItem style={{backgroundColor: '#312934'}}>
            <Image source={require('../assets/icon_money.png')} style={{width: 24, height: 24}}/>
            <Right>
              <Text style={{color: '#FFFFFF', textAlign: 'right'}}>12.5 &nbsp;XTZ</Text>
            </Right>
          </CardItem>
        </Card>

        <Content contentContainerStyle={styles.form}>
          <Content>
            <Form style={{width: 240}}>
              <Label style={{color: '#FFFFFF', textAlign: 'center'}}>Amount</Label>
              <Item inlineLabel last>
                <Label style={{color: '#FFFFFF', textAlign: 'right'}}>XTZ</Label>
                <Input
                  keyboardType="numeric"
                  style={{color: '#FFFFFF', textAlign: 'right'}}
                  value={this.state.term}
                  onChangeText={(val) => this.onChange(val)}
                />
              </Item>
            </Form>
          </Content>
          
          {/* <Text 
            numberOfLines={1} 
            style={{color: '#FFFFFF'}}
          >_________________________________________________
          </Text>
           */}

          <TouchableHighlight onPress={this.onSubmit}>
            <ImageBackground 
              source={require('../assets/button_bg_primary.png')} 
              style={{
                width: 365, 
                height: 63, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center'
              }}
            >
              <Text style={{color: '#FFFFFF', textAlign: 'center', fontSize: 16}}>Deposit</Text>
            </ImageBackground>
          </TouchableHighlight>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight,
    backgroundColor: '#312934',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  form: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connectStyle('NativeBase', styles)(DepositForm)