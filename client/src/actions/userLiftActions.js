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

export const changeAccessoryPlan = plan => {
  console.log('changevaration hit', plan);
  return {
    type: 'CHANGE_ACCESSORY_PLAN',
    plan,
  };
};
