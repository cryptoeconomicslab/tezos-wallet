import { AsyncStorage } from 'react-native'
import { depositTz } from './l1Wallet'

// Constants
export interface DEPOSIT_TZ {
  value: Number
  to: String
}

// Action types
export enum L2_WALLET {
  LOAD_L2_BALANCE = 'LOAD_L2_BALANCE',
  SET_L2_BALANCE = 'SET_L2_BALANCE',
  TRANSFER_L2 = 'TRANSFER_L2'
}

// Action creators
export const loadL2Balance = () => ({
  type: L2_WALLET.LOAD_L1_BALANCE
})

export const setL2Balance = (value: Number) => ({
  type: L2_WALLET.SET_L1_BALANCE,
  payload: value
})


// Reducer
export interface State {
  balance: Number
}

const initialState: State = {
  balance: 0
}

export interface AppAction {
  type: L2_WALLET
  payload?: any
}

const l2WalletReducer = (state: State = initialState, action: AppAction): State => {
  switch (action.type) {
    case L2_WALLET.SET_L2_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    default:
      return state
  }
}

export default l2WalletReducer

// need my address
export const loadL2Wallet = (value: Number) => {
  return async dispatch => {
    try {
      const l2Balance = await AsyncStorage.getItem('l2Balance')
      const value = await JSON.parse(l2Balance)
      await dispatch(setL2Balance(value))
    } catch (error) {
      await console.log(error)
    }
  }
}

export const depositToL2Wallet = (depositArgs: DEPOSIT_TZ) => {
  return async dispatch => {
    try {
      await dispatch(depositTz(depositArgs))
    } catch (error) {
      await console.log(error)
    }
  }
}