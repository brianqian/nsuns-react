export * from './userAuthActions';

export const addAccessories = (name, set, rep, weight) => {
  return {
    type: 'ADD_ACCESSORY',
    name,
    set,
    rep,
    weight,
  };
};

export const getUserLifts = userLifts => {
  return {
    type: 'GET_USER_LIFTS',
    userLifts,
  };
};

export const changeUserLifts = (lift, max) => {
  return {
    type: 'UPDATE_USER_LIFTS',
    lift,
    max,
  };
};
