import Auth from '../utils/auth';
import Api from '../utils/api';
import { getAccessoryPlan, getUserLifts } from './index';

export const loginSuccess = userId => {
  console.log('LOGIN_SUCCESS ID', userId);
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
export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

export const jwtLogin = token => async (dispatch, getState) => {
  const userInfo = await Auth.jwtLogin(token);
  console.log('JWT', userInfo);
  if (userInfo.ok) return dispatch(getAllUserData(userInfo));
};

export const userLogin = loginInfo => async (dispatch, getState) => {
  if (!getState().userAuth.pending) {
    dispatch(loginPending());
    const userInfo = await Auth.logIn(loginInfo);
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
  console.log('getalluserdata');
  const accessoryData = await Api.getAccessoryPlan(userInfo.id);
  if (accessoryData.length) await dispatch(getAccessoryPlan(userInfo.id, accessoryData));
  await dispatch(getUserLifts(userInfo));
  return dispatch(loginSuccess(userInfo.id));
};
export const createNewUser = signUpInfo => async (dispatch, getState) => {
  if (!getState().userAuth.pending) {
    dispatch(signupPending());
    const result = await Auth.signUp(signUpInfo);
    if (result.ok) {
      await dispatch(signupSuccess(result));
      return dispatch(userLogin(signUpInfo));
    } else {
      return dispatch(signupFail(result.message));
    }
  }
};
