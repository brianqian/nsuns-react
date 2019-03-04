import * as Util from '../utils';

export const getUserLifts = userLifts => {
  return {
    type: 'GET_USER_LIFTS',
    userLifts,
  };
};

export const userLiftOnChange = (name, value, standard) => {
  const newValues = Util.swapTmRm(name, value, standard);
  console.log(newValues);
  return {
    type: 'USER_LIFT_ON_CHANGE',
    newValues,
  };
};

export const selectStandardSuccess = standard => {
  return {
    type: 'SELECT_STANDARD_SUCCESS',
    standard,
  };
};

export const selectStandardFail = () => {
  console.error('error');
};
export const selectStandard = standard => async dispatch => {
  const resp = await Util.selectStandard(standard);
  return resp.ok ? dispatch(selectStandardSuccess(standard)) : dispatch(selectStandardFail);
};
