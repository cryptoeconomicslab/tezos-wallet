import { AsyncStorage } from 'react-native'
import { depositTz } from './l1Wallet'
import { BigNumber } from '@cryptoeconomicslab/primitives'

// Constants

// Action types
export enum L2_WALLET {
  LOAD_L2_BALANCE = 'LOAD_L2_BALANCE',
  SET_L2_BALANCE = 'SET_L2_BALANCE',
  INCREASE_L2_BALANCE = 'INCREASE_L2_BALANCE',
  DECREASE_L2_BALANCE = 'DECREASE_L2_BALANCE',
  TRANSFER_L2 = 'TRANSFER_L2'
}

// Action creators
export const loadL2Balance = () => ({
  type: L2_WALLET.LOAD_L2_BALANCE
})

export const setL2Balance = (value: BigNumber) => ({
  type: L2_WALLET.SET_L2_BALANCE,
  payload: value
})

export const increaseL2Balance = (value: BigNumber) => ({
  type: L2_WALLET.INCREASE_L2_BALANCE,
  payload: value
})

export const decreaseL2Balance = (value: BigNumber) => ({
  type: L2_WALLET.DECREASE_L2_BALANCE,
  payload: value
})

// Reducer
export interface State {
  balance: BigNumber
}

const initialState: State = {
  balance: 0
}

export interface AppAction {
  type: L2_WALLET
  payload?: any
}

const l2WalletReducer = (
  state: State = initialState,
  action: AppAction
): State => {
  switch (action.type) {
    case L2_WALLET.SET_L2_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    case L2_WALLET.SET_L2_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    case L2_WALLET.INCREASE_L2_BALANCE:
      return {
        ...state,
        balance: Number(state.balance) + Number(action.payload)
      }
    case L2_WALLET.DECREASE_L2_BALANCE:
      return {
        ...state,
        balance: Number(state.balance) - Number(action.payload)
      }
    default:
      return state
  }
}

export default l2WalletReducer

// need my address
export const loadL2Wallet = (value: BigNumber) => {
  return async dispatch => {
    try {
      const l2Balance = await AsyncStorage.getItem('l2Balance')
      const value = JSON.parse(l2Balance)
      await dispatch(setL2Balance(Number(value)))
    } catch (error) {
      console.log(error)
    }
  }
}

export const depositToL2Wallet = (val: BigNumber) => {
  return async dispatch => {
    try {
      await dispatch(depositTz(val))
      const l1Balance = await AsyncStorage.getItem('l1Balance')
      const value = JSON.parse(l1Balance)
      await AsyncStorage.setItem('l1Balance', JSON.stringify(value - val))
      await AsyncStorage.setItem('l2Balance', JSON.stringify(val))
      const l2Balance = await AsyncStorage.getItem('l2Balance')
      const value2 = JSON.parse(l2Balance)
      await dispatch(increaseL2Balance(Number(value2)))
    } catch (error) {
      console.log(error)
    }
  }
}

export const l2Transfer = (val: BigNumber) => {
  return async dispatch => {
    try {
      const l2Balance = await AsyncStorage.getItem('l2Balance')
      const value2 = JSON.parse(l2Balance)
      await AsyncStorage.setItem(
        'l2Balance',
        JSON.stringify(Number(value2) - Number(val))
      )
      await dispatch(decreaseL2Balance(Number(val)))
    } catch (error) {
      console.log(error)
    }
  }
}
