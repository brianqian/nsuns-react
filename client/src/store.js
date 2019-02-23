import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

import accessories from './data/accessoryPlans';
import dailySplits from './data/dailySplits';

const defaultState = {
  accessories,
  dailySplits,
};

const store = createStore(
  rootReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
