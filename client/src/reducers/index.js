import { combineReducers } from 'redux';

import accessories from './accessories';
import dailySplits from './dailySplits';

const rootReducer = combineReducers({ accessories, dailySplits });

export default rootReducer;
