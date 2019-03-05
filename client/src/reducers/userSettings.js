function userSettings(
  state = {
    settingsOpen: false,
    nsunsVariation: '5day',
    standard: 'lbs',
    wbOption: 'mark',
    timerOption: '30',
  },
  action
) {
  switch (action.type) {
    case 'OPEN_CLOSE_SETTINGS':
      return { ...state, settingsOpen: action.settingsOpenBool };
    case 'TIMER_OPTION_SUCCESS':
      return { ...state, timerOption: action.option };
    case 'WEIGHTBOX_SUCCESS':
      return { ...state, wbOption: action.option };
    case 'VARIATION_SUCCESS':
      return { ...state, nsunsVariation: action.option };
    case 'GET_USER_SETTINGS_SUCCESS':
      delete action.ok;
      return { ...state, ...action.userSettings };
    default:
      return state;
  }
}

export default userSettings;
