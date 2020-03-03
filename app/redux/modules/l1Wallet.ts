import { AsyncStorage } from 'react-native'

// Constants
export interface DEPOSIT_TZ {
  value: Number
  to: String
}

// Action types
export enum L1_WALLET {
  LOAD_L1_BALANCE = 'LOAD_L1_BALANCE',
  SET_L1_BALANCE = 'SET_L1_BALANCE',
  DEPOSIT_TZ = 'DEPOSIT_TZ',
}

// Action creators
export const loadL1Balance = () => ({
  type: L1_WALLET.LOAD_L1_BALANCE
})

export const setL1Balance = (value: Number) => ({
  type: L1_WALLET.SET_L1_BALANCE,
  payload: value
})

export const depositTz = (value: Number) => ({
  type: L1_WALLET.DEPOSIT_TZ,
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
  type: L1_WALLET
  payload?: any
}

const l1WalletReducer = (state: State = initialState, action: AppAction): State => {
  switch (action.type) {
    case L1_WALLET.SET_L1_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    case L1_WALLET.DEPOSIT_TZ:
      return {
        ...state,
        balance: state.balance - action.payload
      }
    default:
      return state
  }
}

export default l1WalletReducer

// need my address
export const loadL1Wallet = (value: Number) => {
  return async dispatch => {
    try {
      // only first time for demo
      // await AsyncStorage.setItem('l1Balance', JSON.stringify(100))
      const l1Balance = await AsyncStorage.getItem('l1Balance')
      const value = await JSON.parse(l1Balance)
      await dispatch(setL1Balance(value))
    } catch (error) {
      await console.log(error)
    }
  }
}
