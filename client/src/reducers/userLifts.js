function userLifts(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_LIFTS':
      let newUserLifts = { ...state, ...action.userLifts };
      const { id, ok, ...removedIdOk } = newUserLifts;
      return removedIdOk;
    case 'LOG_OUT':
      return { ...state, accessoryPlan: 'arms' };
    case 'USER_LIFT_ON_CHANGE':
      return { ...state, ...action.newValues };

    default:
      return state;
  }
}

export default userLifts;
