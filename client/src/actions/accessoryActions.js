export const addAccessoryAction = (userId, dayIndex) => {
  return {
    type: 'ADD_ACCESSORY',
    userId,
    dayIndex,
  };
};

export const addAccessory = (userId, dayIndex) => (dispatch, getState) => {
  dispatch();
  return dispatch(addAccessoryAction(userId, dayIndex));
};
