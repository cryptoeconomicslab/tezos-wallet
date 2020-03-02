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
  type: L1_WALLET.LOAD_L1_BALANCE,
  payload: value
})

export const depositTz = (depositArgs: DEPOSIT_TZ) => ({
  type: L1_WALLET.DEPOSIT_TZ,
  payload: depositArgs
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
    default:
      return state
  }
}

export default l1WalletReducer

// need my address
export const loadL1Wallet = (value: Number) => {
  return async dispatch => {
    try {
      const l1Balance = await AsyncStorage.getItem('l1Balance')
      if (l1Balance !== null) {
        await dispatch(setL1Balance(Number(l1Balance)))
      } {
        await dispatch(setL1Balance(0))
      }
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