export const addAccessoryAction = (userId, dayIndex) => {
  return {
    type: 'ADD_ACCESSORY',
    userId,
    dayIndex,
  };
};

export const createCustomAccessoryPlan = (userId, basePlan) => {
  return {
    type: 'CREATE_CUSTOM_ACCESSORY_PLAN',
    userId,
    basePlan,
  };
};

export const addAccessory = (userId, dayIndex) => (dispatch, getState) => {
  return dispatch(addAccessoryAction(userId, dayIndex));
};
