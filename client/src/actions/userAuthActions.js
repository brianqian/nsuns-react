import Auth from '../utils/auth';

export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS',
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
  console.log('logging in user in user auth actions');
  if (!getState().userAuth.pending) {
    dispatch(loginPending());
    const result = await Auth.logIn(loginInfo);
    console.log(result);
    if (result.success) {
      dispatch({ type: 'GET_USER_LIFTS', userLifts: result });
      return dispatch(loginSuccess(1));
    } else {
      return dispatch(loginFail(result.message));
    }
  }
};

export const createNewUser = signUpInfo => async (dispatch, getState) => {
  if (!getState().userAuth.pending) {
    dispatch(signupPending());
    const result = await Auth.signUp(signUpInfo);
    if (result.success) {
      await dispatch(userLogin(signUpInfo));
      return dispatch(signupSuccess(result));
    } else {
      return dispatch(signupFail(result.message));
    }
  }
};
