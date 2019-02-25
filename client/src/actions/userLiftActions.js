export const getUserLifts = userLifts => {
  return {
    type: 'GET_USER_LIFTS',
    userLifts,
  };
};

export const saveUserLifts = liftObj => {
  return {
    type: 'SAVE_USER_LIFTS',
    liftObj,
  };
};

export const userLiftOnChange = (name, value) => {
  return {
    type: 'USER_LIFT_ON_CHANGE',
    name,
    value,
  };
};
