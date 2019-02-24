function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_CUSTOM_ACCESSORY_PLAN':
      console.log('in customACTION: ', action.basePlan);
      return { ...state, custom: action.basePlan };
    case 'ADD_ACCESSORY':
      console.log(state);
      const { userId, dayIndex } = action;
      const returnObj = { ...state.custom };
      console.log(userId, returnObj[dayIndex]);
      return state;
    case 'EDIT_ACCESSORY':
      return state;
    default:
      return state;
  }
}

export default accessories;
