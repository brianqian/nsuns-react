function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_CUSTOM_ACCESSORY_PLAN':
      return { ...state, custom: action.basePlan, accessoryPlan: 'custom' };
    // case 'ADD_ACCESSORY':
    //   const { userId, dayIndex } = action;
    //   const returnObj = { ...state.custom };
    //   return state;
    case 'SELECT_ACCESSORY_PLAN':
      return { ...state, accessoryPlan: action.plan };
    case 'TOGGLE_ACCESSORY_BOX':
      return { ...state, openAccessoryBox: action.bool };
    case 'GET_ACCESSORY_PLAN':
      return { ...state, custom: action.accessoryPlan, accessoryPlan: 'custom' };
    case 'EDIT_ACCESSORY_SUCCESS':
      const newAccessory = { ...state.custom };
      const { dayIndex, accIndex, title, sets, reps, weight } = action.accessoryInfo;
      newAccessory[dayIndex][accIndex] = { title, sets, reps, weight };
      return { ...state, custom: newAccessory };
    default:
      return state;
  }
}

export default accessories;
