import { combineReducers, Reducer, AnyAction } from 'redux'
import appStatus, { State as AppStatusState } from './appStatus'
import l1Wallet, { State as l1WalletState } from './l1Wallet'
import l2Wallet, { State as l2WalletState } from './l2Wallet'
import address, { State as AddressState } from './address'

export interface AppState {
  reducer: {
    appStatus: AppStatusState,
    address: AddressState,
    l1Wallet: l1WalletState,
    l2Wallet: l2WalletState
  }
}

export default combineReducers({
  appStatus,
  address,
  l1Wallet,
  l2Wallet
})
