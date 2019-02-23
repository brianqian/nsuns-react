import Api from '../utils/api';
import { swapTmRm } from '../utils/helper';

function userLifts(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_LIFTS':
      const newUserLifts = { ...action.userLifts };
      delete newUserLifts.id;
      delete newUserLifts.ok;
      return newUserLifts;
    case 'LOG_OUT':
      return {};
    case 'SAVE_USER_LIFTS':
      let success = Api.saveUserLifts(action.liftObj);
      console.log(success ? 'new values saved' : `error: ${success}`);
      return state;
    case 'USER_LIFT_ON_CHANGE':
      const { name, value } = action;
      const updatedValues = swapTmRm(name, value);
      return { ...state, ...updatedValues };
    default:
      return state;
  }
}

export default userLifts;
