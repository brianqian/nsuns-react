export * from './userAuth';

export const addAccessories = (name, set, rep, weight) => {
  return {
    type: 'ADD_ACCESSORY',
    name,
    set,
    rep,
    weight,
  };
};

export const changeMax = (lift, max) => {
  return {
    type: 'CHANGE_MAX',
    lift,
    max,
  };
};
