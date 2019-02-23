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
