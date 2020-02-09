import React from 'react'
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createReduxContainer } from 'react-navigation-redux-helpers'

import Main from './pages/Main'
import Modal from './pages/Modal'
import NetworkSelect from './pages/NetworkSelect'
import ChallengeList from './pages/ChallengeList'
import AddressList from './pages/AddressList'
import PublicChainWallet from './pages/PublicChainWallet'
import ChildchainWallet from './pages/ChildchainWallet'
import DepositForm from './pages/DepositForm'
import TransferForm from './pages/TransferForm'
import QrcodeScanner from './pages/QrcodeScanner'
import ShowQr from './pages/ShowQr'

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
    }
  },
  {
    initialRouteName: 'Main',
    drawerBackgroundColor: '#312934',
    drawerType: 'front',
    contentOptions: {
      inactiveLabelStyle: {
        color: '#FFF'
      }
    }
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
    }
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
        title: 'PublicChain',
        textStyle: { color: '#FFF' }
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
    }
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
    DepositForm: { screen: DepositForm },
    TransferForm: { screen: TransferForm },
    ChildchainWallet: { screen: ChildchainWalletNavigation },
    QrcodeScanner: { screen: QrcodeScanner },
    ShowQr: { screen: ShowQr }
  },
  { initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none' }
)

const AppContainer = createReduxContainer(NestNavigation)

export const AppWithNavigationState = connect((state: { nav: any }) => ({
  state: state.nav
}))(AppContainer)
