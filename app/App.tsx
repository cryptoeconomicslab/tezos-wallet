import React from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Root } from 'native-base'
import { Provider } from 'react-redux';
import { store } from './redux/makeStore'
import { AppWithNavigationState } from './Navigation'

type Props = {};

type State = {
  isReady: boolean
}

type  AppState = State & Props

export default class App extends React.Component<AppState> {
  constructor(props) {
    super(props);

    // @TODO move reducer
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state
    if (!isReady){
      return <AppLoading />;
    }

    console.ignoredYellowBox = ['Remote debugger'];

    return (
      <Provider store={ store }>
        <Root>
          <AppWithNavigationState />
        </Root>
      </Provider>
    );
  }
}
