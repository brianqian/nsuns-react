import Auth from '../utils/auth';

export const loginSuccess = (userInfo, message) => {
  return {
    type: 'LOGIN_SUCCESS',
    userInfo,
    message,
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

export const userLogin = loginInfo => async (dispatch, getState) => {
  dispatch(loginPending());
  const result = await Auth.logIn(loginInfo);
  if (result.success) {
    return dispatch(loginSuccess(result));
  } else {
    return dispatch(loginFail(result.message));
  }
};

export const createNewUser = loginInfo => async (dispatch, getState) => {
  console.log(getState().pending);
  if (!getState().pending) {
    dispatch(signupPending());
    const result = await Auth.signUp(loginInfo);
    if (result.success) {
      return dispatch(signupSuccess(result));
    } else {
      return dispatch(signupFail(result.message));
    }
  }
};
