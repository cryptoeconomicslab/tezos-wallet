import { combineReducers, Reducer, AnyAction } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import appStatus, { State as AppStatusState } from './appStatus'
import address, { State as AddressState } from './address'
import { NestNavigation } from '../../Navigation'

// const navReducer = createNavigationReducer(NestNavigation)

export interface AppState {
  reducer: {
    appStatus: AppStatusState,
    address: AddressState
  }
}

export default combineReducers({
  appStatus,
  address
})
