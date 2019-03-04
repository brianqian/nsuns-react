function userLifts(state = { nsunsVariation: '5day', standard: 'lbs' }, action) {
  switch (action.type) {
    case 'GET_USER_LIFTS':
      const newUserLifts = { ...state, ...action.userLifts };
      delete newUserLifts.id;
      delete newUserLifts.ok;
      return newUserLifts;
    case 'LOG_OUT':
      return { ...state, nsunsVariation: '5day', accessoryPlan: 'arms' };
    case 'USER_LIFT_ON_CHANGE':
      return { ...state, ...action.newValues };
    case 'SELECT_STANDARD_SUCCESS':
      const { standard } = action;
      return { ...state, standard };
    default:
      return state;
  }
}

export default userLifts;
