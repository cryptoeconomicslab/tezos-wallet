import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createReduxContainer } from 'react-navigation-redux-helpers';

import Main from './pages/Main'
import Push from './pages/Push'
import Modal from './pages/Modal'

const MainNavigation = createDrawerNavigator(
  {
    Main: { screen: Main },
    Push: { screen: Push },
  },
  {initialRouteName: 'Main'}
)

export const NestNavigation = createStackNavigator(
  {
    MainNavigation: { screen: MainNavigation },
    Modal: { screen: Modal },
  },
  {initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none'},
)

const AppContainer = createReduxContainer(NestNavigation);

export const AppWithNavigationState = connect((state) => ({
  state: state.nav
}))(AppContainer);