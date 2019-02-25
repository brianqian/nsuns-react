function userAuth(
  state = { message: '', showStatus: false, pending: false, loggedIn: false },
  action
) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        message: 'Logged in!',
        pending: false,
        loggedIn: true,
        userId: action.userId,
      };
    case 'LOGIN_FAIL':
      return { ...state, message: action.message, showStatus: true, pending: false };
    case 'LOGIN_PENDING':
      return { ...state, message: 'Logging in...', showStatus: true, pending: true };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        message: 'Account created!',
        showStatus: true,
        pending: false,
        loggedIn: true,
      };
    case 'SIGNUP_FAIL':
      return { ...state, message: action.message, showStatus: true, pending: false };
    case 'SIGNUP_PENDING':
      return { ...state, message: 'Creating Account...', showStatus: true, pending: true };
    case 'LOG_OUT':
      return { ...state, message: '', showStatus: false, loggedIn: false };
    default:
      return state;
  }
}

export default userAuth;
