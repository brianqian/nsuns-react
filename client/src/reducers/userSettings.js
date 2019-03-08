function userSettings(
  state = {
    settingsOpen: false,
    variation: '5day',
    standard: 'lbs',
    wbOption: 'mark',
    timerOption: '30',
    cap3Week: '1',
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
      return { ...state, variation: action.option };
    case 'CAP_WEEK_SUCCESS':
      return { ...state, cap3Week: action.option };
    case 'SELECT_STANDARD_SUCCESS':
      const { standard } = action;
      return { ...state, standard };
    case 'GET_USER_SETTINGS_SUCCESS':
      const { ok, ...userSettings } = action.userSettings;
      return { ...state, ...userSettings };
    default:
      return state;
  }
}

export default userSettings;
