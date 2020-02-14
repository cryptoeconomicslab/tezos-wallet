import { combineReducers, Reducer, AnyAction } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import appStatus, { State as AppStatusState } from './appStatus'
import { NestNavigation } from '../../Navigation'

// const navReducer = createNavigationReducer(NestNavigation)

export interface AppState {
  reducer: {
    appStatus: AppStatusState
  }
}

export default combineReducers({
  appStatus
})
