import React, {Component} from 'react';
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
export default class NetworkSelect extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      selected2: ''
    };
  }

  componentDidMount(){
    this.setState({
      selected2: 'babylonnet'
    });
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Network</Title>
          </Body>
          <Right />
        </Header>
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
                <Picker.Item label="Alphanet" value="alphanet" />
                <Picker.Item label="Babylonnet" value="babylonnet" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}