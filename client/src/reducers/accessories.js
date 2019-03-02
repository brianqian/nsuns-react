function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_ACCESSORY_PLAN_SUCCESS':
      return { ...state, custom: action.basePlan, accessoryPlan: 'custom' };
    case 'ADD_ACCESSORY': {
      const { title, sets, reps, weight, id, dayIndex } = action;
      const newState = { ...state };
      console.log(newState, dayIndex);
      newState.custom[dayIndex].push({ title, sets, reps, weight, id });
      console.log(newState);
      return newState;
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
      const newState = { ...state };
      const index = newState.custom[dayIndex].findIndex(item => item.id === id);
      newState.custom[dayIndex][index] = { id, title, sets, reps, weight };
      return newState;
    }
    case 'DELETE_ACCESSORY_SUCCESS': {
      console.log('DELETE ACCESSORY SUCCESS');
      const newState = { ...state };
      const { dayIndex, accIndex } = action;
      newState.custom[dayIndex].splice(accIndex, 1);
      return newState;
    }
    case 'DELETE_ACCESSORY_FAIL': {
      console.error('DELETE ACC FAIL', action.error);
      return state;
    }
    default:
      return state;
  }
}

export default accessories;
