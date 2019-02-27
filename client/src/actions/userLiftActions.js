import { swapTmRm } from '../utils';

export const getUserLifts = userLifts => {
  return {
    type: 'GET_USER_LIFTS',
    userLifts,
  };
};

export const userLiftOnChange = (name, value) => {
  const newValues = swapTmRm(name, value);
  return {
    type: 'USER_LIFT_ON_CHANGE',
    newValues,
  };
};
