import React from 'react'
import { StyleSheet, YellowBox } from 'react-native'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import { Root } from 'native-base'
import { Provider } from 'react-redux'
import configureStore from './redux/makeStore'
import { AppWithNavigationState } from './Navigation'
import Initial from './components/Initial'

const initialState = {}
const store = configureStore(initialState)

YellowBox.ignoreWarnings(['Warning: ...'])

type Props = {}

type State = {
  isReady: boolean
}

type AppState = State & Props

export default class App extends React.Component<AppState> {
  constructor(props) {
    super(props)

    // @TODO move reducer
    this.state = {
      isReady: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    })
    this.setState({ isReady: true })
  }

  render() {
    const { isReady } = this.state
    if (!isReady) {
      return <AppLoading />
    }

    console.ignoredYellowBox = ['Remote debugger']

    return (
      <Provider store={store}>
        <Root>
          <Initial>
            <AppWithNavigationState />
          </Initial>
        </Root>
      </Provider>
    )
  }
}
