function userAuth(state = [], action) {
  switch (action.type) {
    case 'GET_USER_INFO':
      console.log(action);
      return state;
    default:
      return state;
  }
}

export default userAuth;
