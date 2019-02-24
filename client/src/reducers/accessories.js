function accessories(state = {}, action) {
  switch (action.type) {
    case 'ADD_ACCESSORY':
      console.log(state);
      const { userId, dayIndex } = action;
      return state;

    default:
      return state;
  }
}

export default accessories;
