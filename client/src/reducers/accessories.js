function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_ACCESSORY_PLAN_SUCCESS':
      return { ...state, custom: action.basePlan, accessoryPlan: 'custom' };
    case 'ADD_ACCESSORY': {
      const { title, sets, reps, weight, id, dayIndex } = action;
      const newState = { ...state.custom };
      console.log(newState, dayIndex);
      newState[dayIndex].push({ title, sets, reps, weight, id });
      return { ...state, custom: newState };
    }
    case 'CLEAR_ACCESSORIES': {
      const baseAccessories = { ...state };
      if (baseAccessories.custom) delete baseAccessories.custom;
      baseAccessories.accessoryPlan = 'arms';
      return baseAccessories;
    }
    case 'SELECT_ACCESSORY_PLAN': {
      return { ...state, accessoryPlan: action.plan };
    }
    case 'TOGGLE_ACCESSORY_BOX': {
      const openAccessoryBox = { ...state.openAccessoryBox };
      openAccessoryBox[action.index] = action.bool;
      return { ...state, openAccessoryBox };
    }
    case 'GET_ACCESSORY_PLAN': {
      return { ...state, custom: action.accessoryPlan, accessoryPlan: 'custom' };
    }
    case 'EDIT_ACCESSORY_SUCCESS': {
      const { dayIndex, title, sets, reps, weight, id } = action.payload;
      const newAccessory = { ...state.custom };
      const index = newAccessory[dayIndex].findIndex(item => item.id === id);
      newAccessory[dayIndex][index] = { title, sets, reps, weight };
      return { ...state, custom: newAccessory };
    }
    case 'DELETE_ACCESSORY': {
      const newState = { ...state.custom };
      console.log(newState, action);
      const index = newState[action.dayIndex].findIndex(accessory => accessory.id === action.id);
      newState[action.dayIndex].splice(index, 1);
      return { ...state, custom: newState };
    }
    default:
      return state;
  }
}

export default accessories;
