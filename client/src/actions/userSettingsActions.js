import * as Util from "../utils";
import { selectAccessoryPlanSuccess } from "./accessoryActions";

export const selectStandardSuccess = standard => {
  return {
    type: "SELECT_STANDARD_SUCCESS",
    standard,
  };
};

export const timerOptionSuccess = option => {
  return {
    type: "TIMER_OPTION_SUCCESS",
    option,
  };
};
export const timerOptionFail = () => {
  return {
    type: "TIMER_OPTION_FAIL",
  };
};
export const weightBoxSuccess = option => {
  return {
    type: "WEIGHTBOX_SUCCESS",
    option,
  };
};
export const weightBoxFail = () => {
  return {
    type: "WEIGHTBOX_FAIL",
  };
};
export const variationSuccess = option => {
  return {
    type: "VARIATION_SUCCESS",
    option,
  };
};
export const variationFail = () => {
  return {
    type: "VARIATION_FAIL",
  };
};
export const getUserSettingsSuccess = userSettings => {
  return {
    type: "GET_USER_SETTINGS_SUCCESS",
    userSettings,
  };
};
export const getUserSettingsFail = () => {
  return {
    type: "GET_USER_SETTINGS_FAIL",
  };
};

export const selectStandardFail = () => {
  console.error("error");
};
export const selectStandard = (standard, userId) => async dispatch => {
  const resp = await Util.selectStandard(standard, userId);
  if (!userId) dispatch(selectStandardSuccess(standard));
  return resp.ok ? dispatch(selectStandardSuccess(standard)) : dispatch(selectStandardFail());
};

export const setTimerOption = (option, userId) => async dispatch => {
  const resp = await Util.selectTimerOption(option, userId);
  return resp.ok ? dispatch(timerOptionSuccess(option)) : dispatch(timerOptionFail());
};
export const setWeightBoxOption = (option, userId) => async dispatch => {
  const resp = await Util.selectWeightBoxOption(option, userId);
  return resp.ok ? dispatch(weightBoxSuccess(option)) : dispatch(weightBoxFail());
};
export const setVariation = (option, userId) => async dispatch => {
  const resp = await Util.selectVariation(option, userId);
  return resp.ok ? dispatch(variationSuccess(option)) : dispatch(variationFail());
};
export const getUserSettings = userId => async dispatch => {
  const userSettings = await Util.getUserSettings(userId);
  if (userSettings.ok) {
    await dispatch(selectAccessoryPlanSuccess(userSettings.accessoryPlan));
    dispatch(getUserSettingsSuccess(userSettings));
  }
};
