import { createStore } from 'redux';
import rootReducer from './reducers';

import accessories from './data/accessoryPlans';
import dailySplits from './data/dailySplits';

const defaultState = {
  accessories,
  dailySplits,
};

const store = createStore(rootReducer, defaultState);

export default store;
