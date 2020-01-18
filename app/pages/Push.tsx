import React, {Component} from 'react';
import StackHeader from '../components/StackHeader'
import { 
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Form,
  Item,
  Picker,
  Content,
   } from 'native-base';

type Props = {};
export default class Push extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selected2: ''
    };
  }

  componentDidMount(){
    this.setState({
      selected2: 'public'
    });
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    const { navigation } = this.props

    return (
      <Container>
        <StackHeader 
          title={'push'}
          navigation={navigation}
        />
        <Content>
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
                <Picker.Item label="public chain" value="public" />
                <Picker.Item label="child chain" value="child" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}