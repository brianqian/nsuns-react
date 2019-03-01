function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_ACCESSORY_PLAN_SUCCESS':
      return { ...state, custom: action.basePlan, accessoryPlan: 'custom' };
    // case 'ADD_ACCESSORY':
    //   const { userId, dayIndex } = action;
    //   const returnObj = { ...state.custom };
    //   return state;
    case 'CLEAR_ACCESSORIES':
      let baseAccessories = { ...state };
      if (baseAccessories.custom) delete baseAccessories.custom;
      baseAccessories.accessoryPlan = 'arms';
      return baseAccessories;
    case 'SELECT_ACCESSORY_PLAN':
      return { ...state, accessoryPlan: action.plan };
    case 'TOGGLE_ACCESSORY_BOX':
      let openAccessoryBox = { ...state.openAccessoryBox };
      openAccessoryBox[action.index] = action.bool;
      return { ...state, openAccessoryBox };
    case 'GET_ACCESSORY_PLAN':
      return { ...state, custom: action.accessoryPlan, accessoryPlan: 'custom' };
    case 'EDIT_ACCESSORY_SUCCESS':
      let { dayIndex, title, sets, reps, weight, id } = action.accessoryInfo;
      const newAccessory = { ...state.custom };
      let index = newAccessory[dayIndex].findIndex(item => item.id === id);
      newAccessory[dayIndex][index] = { title, sets, reps, weight };
      return { ...state, custom: newAccessory };
    case 'DELETE_ACCESSORY':
      const newState = { ...state.custom };
      console.log(newState, action);
      index = newState[action.dayIndex].findIndex(accessory => accessory.id === action.id);
      newState[action.dayIndex].splice(index, 1);
      return { ...state, custom: newState };
    default:
      return state;
  }
}

export default accessories;
