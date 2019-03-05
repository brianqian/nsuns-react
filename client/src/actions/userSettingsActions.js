import * as Util from '../utils';

export const selectStandardSuccess = standard => {
  return {
    type: 'SELECT_STANDARD_SUCCESS',
    standard,
  };
};

export const timerOptionSuccess = option => {
  return {
    type: 'TIMER_OPTION_SUCCESS',
    option,
  };
};
export const timerOptionFail = () => {
  return {
    type: 'TIMER_OPTION_FAIL',
  };
};
export const weightBoxSuccess = option => {
  return {
    type: 'WEIGHTBOX_SUCCESS',
    option,
  };
};
export const weightBoxFail = () => {
  return {
    type: 'WEIGHTBOX_FAIL',
  };
};
export const variationSuccess = option => {
  return {
    type: 'VARIATION_SUCCESS',
    option,
  };
};
export const variationFail = () => {
  return {
    type: 'VARIATION_FAIL',
  };
};

export const selectStandardFail = () => {
  console.error('error');
};
export const selectStandard = standard => async dispatch => {
  const resp = await Util.selectStandard(standard);
  return resp.ok ? dispatch(selectStandardSuccess(standard)) : dispatch(selectStandardFail());
};

export const setTimerOption = option => async dispatch => {
  const resp = await Util.setTimerOption(option);
  return resp.ok ? dispatch(timerOptionSuccess(option)) : dispatch(timerOptionFail());
};
export const setWeightBoxOption = option => async dispatch => {
  const resp = await Util.setWeightBoxOption(option);
  return resp.ok ? dispatch(weightBoxSuccess(option)) : dispatch(weightBoxFail());
};
export const setVariation = option => async dispatch => {
  const resp = await Util.setVariation(option);
  return resp.ok ? dispatch(variationSuccess(option)) : dispatch(variationFail());
};
