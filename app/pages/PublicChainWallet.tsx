import React, {Component} from 'react';
import { DrawerActions } from 'react-navigation-drawer'
import RootHeader from '../components/RootHeader'
import { 
  Container,
  Icon,
  Form,
  Item,
  Picker,
  Content,
   } from 'native-base';

type Props = {
  selected2: string
};

class PublicChainWallet extends Component<Props> {
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
        <RootHeader
          navigation={navigation}
          title={'Public Chain'}
        />
        <Container>
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
      </Container>
    );
  }
}

export default PublicChainWallet