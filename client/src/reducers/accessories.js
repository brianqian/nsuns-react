function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_CUSTOM_ACCESSORY_PLAN':
      const { userId, basePlan } = action;
      const customPlan = { ...state[basePlan] };
      console.log('creating custom plan: ', { ...state, custom: customPlan });
      return { ...state, custom: customPlan };
    case 'ADD_ACCESSORY':
      console.log(state);
      const { dayIndex } = action;
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
