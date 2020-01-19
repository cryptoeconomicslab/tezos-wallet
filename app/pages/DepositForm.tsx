import React, {Component} from 'react';
import { StyleSheet } from 'react-native'
import StackHeader from '../components/StackHeader'
import { 
  Container,
  Icon,
  Form,
  Item,
  Picker,
  Content,
  connectStyle
   } from 'native-base';

type Props = {
  navigation: any
}

type State = {
  selected2: string
}

class DepositForm extends Component<Props, State> {
  render() {
    const { navigation } = this.props  
    return (
      <Container>    
        <StackHeader 
          title={'Deposit'}
          navigation={navigation}
        />
        <Container>
          {/* <Content>
            <Form>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="public chain"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="Alphanet" value="alphanet" />
                  <Picker.Item label="Babylonnet" value="babylonnet" />
                </Picker>
              </Item>
            </Form>
          </Content> */}
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