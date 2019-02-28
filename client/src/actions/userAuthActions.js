import * as Util from '../utils';
import { getUserLifts, getAccessoryPlan, clearAccessories } from './';

export const loginSuccess = userId => {
  return {
    type: 'LOGIN_SUCCESS',
    userId,
  };
};
export const loginFail = message => {
  return {
    type: 'LOGIN_FAIL',
    message,
  };
};
export const loginPending = () => {
  return {
    type: 'LOGIN_PENDING',
  };
};

export const signupSuccess = message => {
  return {
    type: 'SIGNUP_SUCCESS',
    message,
  };
};
export const signupFail = message => {
  return {
    type: 'SIGNUP_FAIL',
    message,
  };
};
export const signupPending = () => {
  return {
    type: 'SIGNUP_PENDING',
  };
};
export const logOutAction = () => {
  return {
    type: 'LOG_OUT',
  };
};

//? switching the order of logOutAction and clearAccessories causes a bug
export const logOut = () => async dispatch => {
  await dispatch(logOutAction());
  return dispatch(clearAccessories());
};

export const jwtLogin = token => async dispatch => {
  const userInfo = await Util.jwtLogin(token);
  return dispatch(getAllUserData(userInfo));
};

export const userLogin = loginInfo => async (dispatch, getState) => {
  if (!getState().userAuth.pending) {
    dispatch(loginPending());
    const userInfo = await Util.logIn(loginInfo);
    console.log(userInfo);
    if (userInfo.ok) {
      await localStorage.setItem('userId', userInfo.token);
      //check if accessoryplan exists and update state if it does
      dispatch(getAllUserData(userInfo));
    } else {
      return dispatch(loginFail(userInfo.message));
    }
  }
};
export const getAllUserData = userInfo => async (dispatch, getState) => {
  const accessoryData = await Util.getAccessoryPlan(userInfo.id);
  console.log(accessoryData);
  if (accessoryData.length) await dispatch(getAccessoryPlan(userInfo.id, accessoryData));
  await dispatch(getUserLifts(userInfo));
  return dispatch(loginSuccess(userInfo.id));
};

export const createNewUser = signUpInfo => async (dispatch, getState) => {
  if (!getState().userAuth.pending) {
    dispatch(signupPending());
    const result = await Util.signUp(signUpInfo);
    if (result.ok) {
      await dispatch(signupSuccess(result));
      return dispatch(userLogin(signUpInfo));
    } else {
      return dispatch(signupFail(result.message));
    }
  }
};
