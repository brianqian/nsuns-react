function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_CUSTOM_ACCESSORY_PLAN':
      console.log('in customACTION: ', action.basePlan);
      return { ...state, custom: action.basePlan };
    case 'ADD_ACCESSORY':
      const { userId, dayIndex } = action;
      const returnObj = { ...state.custom };
      return state;
    case 'CHANGE_ACCESSORY_PLAN':
      return { ...state, accessoryPlan: action.plan };
    case 'GET_ACCESSORY_PLAN':
      return { ...state, custom: action.accessoryPlan, accessoryPlan: 'custom' };
    default:
      return state;
  }
}

export default accessories;
