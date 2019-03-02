function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_ACCESSORY_PLAN_SUCCESS':
      return { ...state, custom: action.basePlan, accessoryPlan: 'custom' };
    case 'ADD_ACCESSORY': {
      return { ...state, custom: action.basePlan };
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
      return { ...state, custom: action.basePlan };
    }
    case 'DELETE_ACCESSORY_SUCCESS': {
      console.log('DELETE ACCESSORY SUCCESS');

      return { ...state, custom: action.basePlan };
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
