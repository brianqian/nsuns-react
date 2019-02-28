import * as Util from '../utils/accessories';
export const addAccessoryAction = (userId, dayIndex) => {
  return {
    type: 'ADD_ACCESSORY',
    userId,
    dayIndex,
  };
};

export const createAccessoryPlanSuccess = basePlan => {
  return {
    type: 'CREATE_ACCESSORY_PLAN_SUCCESS',
    basePlan,
  };
};

export const getAccessoryPlan = (userId, accessoryPlan) => {
  return {
    type: 'GET_ACCESSORY_PLAN',
    userId,
    accessoryPlan,
  };
};

export const selectAccessoryPlan = plan => {
  return {
    type: 'SELECT_ACCESSORY_PLAN',
    plan,
  };
};

export const editAccessorySuccess = accessoryInfo => {
  return {
    type: 'EDIT_ACCESSORY_SUCCESS',
    accessoryInfo,
  };
};

export const openAccessoryBox = bool => {
  return {
    type: 'TOGGLE_ACCESSORY_BOX',
    bool,
  };
};

export const clearAccessories = () => {
  return {
    type: 'CLEAR_ACCESSORIES',
  };
};

export const editAccessory = accessoryInfo => async dispatch => {
  console.log(accessoryInfo);
  //TODO: add connection to createAccessoryPlan
  const resp = await Util.editAccessory(accessoryInfo);
  if (resp.ok) return dispatch(editAccessorySuccess(accessoryInfo));
};

export const addAccessory = (userId, dayIndex) => async dispatch => {
  //TODO: needs a function which inserts accessory into database

  //updates state with added accessory
  return dispatch(addAccessoryAction(userId, dayIndex));
};

export const createAccessoryPlan = (userId, basePlan) => async dispatch => {
  //TODO: all async actions need pending/success/fail actions
  //inserts accessoryPlan into database
  await Util.createAccessoryPlan(userId, basePlan);
  //updates state using basePlan as a template
  return dispatch(createAccessoryPlanSuccess(basePlan));
};
