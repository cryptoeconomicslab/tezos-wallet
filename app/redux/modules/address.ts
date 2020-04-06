// CONSTANTS
// Action types
export enum ADDRESS {
  SET_USER_ADDRESS = 'SET_USER_ADDRESS'
}

// Action creators
export const setUserAddress = (address: string) => ({
  type: ADDRESS.SET_USER_ADDRESS,
  payload: address
})

// Reducer
export interface State {
  address: string
}

const initialState: State = {
  address: ''
}

export interface AddressAction {
  type: ADDRESS
  payload?: any
}

const addressReducer = (
  state: State = initialState,
  action: AddressAction
): State => {
  switch (action.type) {
    case ADDRESS.SET_USER_ADDRESS:
      return {
        ...state,
        address: action.payload
      }
    default:
      return state
  }
}

export default addressReducer
