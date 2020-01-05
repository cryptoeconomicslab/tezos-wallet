import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';

import Main from './pages/Main'
import Push from './pages/Push'
import Modal from './pages/Modal'

import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';

const MainNavigation = createDrawerNavigator(
  {
    Main: { screen: Main },
    Push: { screen: Push },
  },
  {initialRouteName: 'Main'}
)

const NestNavigation = createStackNavigator(
  {
    MainNavigation: { screen: MainNavigation },
    Modal: { screen: Modal },
  },
  {initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none'},
)

const AppContainer = createAppContainer(NestNavigation);

type Props = {};

type State = {
  isReady: boolean
}

type  AppState = State & Props

export default class App extends React.Component<AppState> {
  constructor(props) {
    super(props);
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

    return (
      <AppContainer 
        ref={nav => {
         this.navigator = nav;
       }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
