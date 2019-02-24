import { combineReducers } from 'redux';

import accessories from './accessories';
import dailySplits from './dailySplits';
import userAuth from './userAuth';
import userLifts from './userLifts';

const rootReducer = combineReducers({ accessories, dailySplits, userAuth, userLifts });

export default rootReducer;
