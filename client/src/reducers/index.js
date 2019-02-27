import { combineReducers } from 'redux';

import accessories from './accessories';
import dailySplits from './dailySplits';
import userAuth from './userAuth';
import userLifts from './userLifts';
import userSettings from './userSettings';

const rootReducer = combineReducers({
  accessories,
  dailySplits,
  userAuth,
  userLifts,
  userSettings,
});

export default rootReducer;
