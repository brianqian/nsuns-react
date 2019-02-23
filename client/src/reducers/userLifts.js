function userLifts(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_LIFTS':
      // if (action.userLifts) return
      console.log('GET USER LIFTS', action.userLifts);

      return action.userLifts;
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
}

export default userLifts;
