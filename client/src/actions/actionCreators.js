import Auth from '../utils/auth';

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

export const getUserInfo = liftData => {
  return {
    type: 'GET_USER_INFO',
    liftData,
  };
};

export const userLogin = loginInfo => async (dispatch, getState) => {
  console.log('in userlogin');
  const result = await Auth.logIn(loginInfo);
  return dispatch(getUserInfo(result));
};
