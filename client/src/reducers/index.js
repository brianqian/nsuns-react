import { combineReducers } from 'redux';

import accessories from './accessories';
import dailySplits from './dailySplits';
import userAuth from './userAuth';

const rootReducer = combineReducers({ accessories, dailySplits, userAuth });

export default rootReducer;
