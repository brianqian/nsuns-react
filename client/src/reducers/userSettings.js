function userSettings(state = { settingsOpen: false }, action) {
  switch (action.type) {
    case 'OPEN_CLOSE_SETTINGS':
      console.log(state);
      return { ...state, settingsOpen: action.settingsOpenBool };
    default:
      return state;
  }
}

export default userSettings;
