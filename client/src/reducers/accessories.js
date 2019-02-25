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
    case 'CHANGE_ACCESSORY_PLAN':
      console.log('hello???', state, action.plan);
      return { ...state, accessoryPlan: action.plan };
    case 'GET_ACCESSORY_PLAN':
      console.log('getaccsoryplan', { ...state, custom: action.accessoryPlan });
      return { ...state, custom: action.accessoryPlan };
      //TODO: update state with accessory plan
      console.log('got accessory plan');
    default:
      return state;
  }
}

export default accessories;
