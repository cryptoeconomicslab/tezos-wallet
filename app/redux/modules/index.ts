import { combineReducers, Reducer, AnyAction } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import apps, { State as AppStatusState } from './appStatus'
import { NestNavigation } from '../../Navigation'

// const navReducer = createNavigationReducer(NestNavigation)

export interface AppState {
  reducer: {
    apps: AppStatusState
  }
}

export default combineReducers({
  apps
})
