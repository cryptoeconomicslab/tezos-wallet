// CONSTANTS
export enum APP_STATUS {
  INITIAL = 'INITIAL',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR'
}

// Action types
export enum APP_ACTION_TYPES {
  LOAD_APP_START = 'LOAD_APP_START',
  LOAD_APP_SUCCESS = 'LOAD_APP_SUCCESS',
  LOAD_APP_FAIL = 'LOAD_APP_FAIL'
}

// Action creators
export const loadAppStart = () => ({
  type: APP_ACTION_TYPES.LOAD_APP_START
})

export const loadAppSuccess = () => ({
  type: APP_ACTION_TYPES.LOAD_APP_SUCCESS
})

export const loadAppFail = (error: Error) => ({
  type: APP_ACTION_TYPES.LOAD_APP_FAIL,
  payload: error
})

// Reducer
export interface State {
  status: APP_STATUS
  error: Error | null
}

const initialState: State = {
  status: APP_STATUS.INITIAL,
  error: null
}

export interface AppAction {
  type: APP_ACTION_TYPES
  payload?: any
}

const reducer = (state: State = initialState, action: AppAction): State => {
  switch (action.type) {
    case APP_ACTION_TYPES.LOAD_APP_START:
      return {
        ...state,
        status: APP_STATUS.LOADING
      }
    case APP_ACTION_TYPES.LOAD_APP_SUCCESS:
      return {
        ...state,
        status: APP_STATUS.LOADED
      }
    case APP_ACTION_TYPES.LOAD_APP_FAIL:
      return {
        ...state,
        status: APP_STATUS.ERROR,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer

export const checkClientInitialized = () => {
  return async dispatch => {
    dispatch(loadAppSuccess)
  }
}
