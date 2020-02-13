import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './modules'
import { NestNavigation } from '../Navigation'


const navReducer = createNavigationReducer(NestNavigation)
// const appReducer = combineReducers({
//   nav: navReducer
// })

const middleware = createReactNavigationReduxMiddleware(state => state.nav)

// export const store = createStore(reducer, applyMiddleware(middleware))

const configureStore = (initialState: any) => {
  return createStore(
    combineReducers({
      reducer,
      initialState,
      nav: navReducer
    }),
    applyMiddleware(middleware, thunkMiddleware, logger)
  )
}

export default configureStore
