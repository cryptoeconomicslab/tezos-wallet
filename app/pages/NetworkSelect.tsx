import React, { Component } from 'react'
import StackHeader from '../components/StackHeader'
import { Container, Icon, Form, Item, Picker, Content } from 'native-base'

type Props = {
  navigation: any
}

type State = {
  selected2: string
}

export default class NetworkSelect extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      selected2: ''
    }
  }

  componentDidMount() {
    this.setState({
      selected2: 'babylonnet'
    })
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    })
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <StackHeader title={'Network'} navigation={navigation} />
        <Container>
          <Content>
            <Form>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined }}
                  placeholder="public chain"
                  placeholderStyle={{ color: '#bfc6ea' }}
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
      </Container>
    )
  }
}
