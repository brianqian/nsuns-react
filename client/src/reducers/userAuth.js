function userAuth(state = { message: '', showStatus: false, pending: false }, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const { userInfo } = action;
      return { ...state, userInfo, message: action.message, pending: false };
    case 'LOGIN_FAIL':
      return { ...state, message: action.message, showStatus: true, pending: false };
    case 'LOGIN_PENDING':
      return { ...state, message: 'Logging in...', showStatus: true, pending: true };
    case 'SIGNUP_SUCCESS':
      return { ...state, message: action.message, showStatus: true, pending: false };
    case 'SIGNUP_FAIL':
      return { ...state, message: action.message, showStatus: true, pending: false };
    case 'SIGNUP_PENDING':
      return { ...state, message: 'Creating Account...', showStatus: true, pending: true };
    case 'LOG_OUT':
      return { ...state, message: '', showStatus: false };
    default:
      return state;
  }
}

export default userAuth;
