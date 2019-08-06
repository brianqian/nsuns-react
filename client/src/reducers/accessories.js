function accessories(state = {}, action) {
  switch (action.type) {
    case 'CREATE_ACCESSORY_PLAN_SUCCESS':
      return { ...state, custom: action.basePlan, accessoryPlan: 'custom' };
    case 'ADD_ACCESSORY': {
      return { ...state, custom: action.basePlan };
    }
    case 'CLEAR_ACCESSORIES': {
      const baseAccessories = { ...state };
      const { custom, ...removedCustom } = baseAccessories;
      removedCustom.accessoryPlan = 'arms';
      return removedCustom;
    }
    case 'SELECT_ACCESSORY_PLAN_SUCCESS': {
      return { ...state, accessoryPlan: action.accessoryPlan };
    }
    case 'LOAD_CUSTOM_ACCESSORY_SUCCESS': {
      return { ...state, custom: action.accessoryPlan };
    }
    case 'EDIT_ACCESSORY_SUCCESS': {
      return { ...state, custom: action.basePlan };
    }
    case 'DELETE_ACCESSORY_SUCCESS': {
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
