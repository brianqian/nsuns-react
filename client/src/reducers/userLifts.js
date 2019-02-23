import Api from '../utils/api';

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
    default:
      return state;
  }
}

export default userLifts;
