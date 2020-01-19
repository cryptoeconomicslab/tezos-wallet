import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createReduxContainer } from 'react-navigation-redux-helpers';

import Main from './pages/Main'
import Push from './pages/Push'
import Modal from './pages/Modal'
import NetworkSelect from './pages/NetworkSelect'
import ChallengeList from './pages/ChallengeList'
import AddressList from './pages/AddressList'
import PublicChainWallet from './pages/PublicChainWallet'
import ChildchainWallet from './pages/ChildchainWallet'

const MainNavigation = createDrawerNavigator(
  {
    Main: { 
      screen: Main,
      navigationOptions: {
        title: 'Wallet list'
      }
    },
    PublicChainWallet: { 
      screen: PublicChainWallet,
      navigationOptions: {
        title: 'PublicChain'
      }
    },
    ChildchainWallet: { 
      screen: ChildchainWallet,
      navigationOptions: {
        title: 'Childchain'
      }
    },
    ChallengeList: { 
      screen: ChallengeList,
      navigationOptions: {
        title: 'Challenge list'
      }
    },
    Network: {
      screen: NetworkSelect,
      navigationOptions: {
        title: 'Network'
      }
    },
    AddressList: { 
      screen: AddressList,
      navigationOptions: {
        title: 'Address list'
      }
    },
    Push: { screen: Push },
  },
  {
    initialRouteName: 'Main',
    drawerBackgroundColor: '#312934',
    drawerType: 'front'
  }
)

const PublicChainWalletNavigation = createDrawerNavigator(
  {
    PublicChainWallet: { 
      screen: PublicChainWallet,
      navigationOptions: {
        title: 'Publicchain'
      }
    },
    ChildchainWallet: { 
      screen: ChildchainWallet,
      navigationOptions: {
        title: 'Childchain'
      }
    },
    ChallengeList: { 
      screen: ChallengeList,
      navigationOptions: {
        title: 'Challenge list'
      }
    },
    Network: {
      screen: NetworkSelect,
      navigationOptions: {
        title: 'Network'
      }
    },
    AddressList: { 
      screen: AddressList,
      navigationOptions: {
        title: 'Address list'
      }
    },
    Push: { screen: Push },
  },
  {
    initialRouteName: 'PublicChainWallet',
    drawerBackgroundColor: '#312934',
    drawerType: 'front'
  }
)

const ChildchainWalletNavigation = createDrawerNavigator(
  {
    PublicChainWallet: { 
      screen: PublicChainWallet,
      navigationOptions: {
        title: 'PublicChain'
      }
    },
    ChildchainWallet: { 
      screen: ChildchainWallet,
      navigationOptions: {
        title: 'ChildChain'
      }
    },
    ChallengeList: { 
      screen: ChallengeList,
      navigationOptions: {
        title: 'Challenge list'
      }
    },
    Network: {
      screen: NetworkSelect,
      navigationOptions: {
        title: 'Network'
      }
    },
    AddressList: { 
      screen: AddressList,
      navigationOptions: {
        title: 'Address list'
      }
    },
    Push: { screen: Push },
  },
  {
    initialRouteName: 'ChildchainWallet',
    drawerBackgroundColor: '#312934',
    drawerType: 'front'
  }
)

export const NestNavigation = createStackNavigator(
  {
    MainNavigation: { screen: MainNavigation },
    Modal: { screen: Modal },
    PublicChainWallet: { screen: PublicChainWalletNavigation },
    ChildchainWallet: { screen: ChildchainWalletNavigation }
  },
  {initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none'},
  
)

const AppContainer = createReduxContainer(NestNavigation);

export const AppWithNavigationState = connect((state) => ({
  state: state.nav
}))(AppContainer);