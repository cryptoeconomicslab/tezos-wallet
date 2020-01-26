import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import { NestNavigation } from '../Navigation'

const navReducer = createNavigationReducer(NestNavigation);
const appReducer = combineReducers({
  nav: navReducer
});

const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

export const store = createStore(
  appReducer,
  applyMiddleware(middleware),
)
