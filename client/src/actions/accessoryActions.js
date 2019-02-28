import * as Util from '../utils/accessories';
export const addAccessoryAction = (userId, dayIndex) => {
  return {
    type: 'ADD_ACCESSORY',
    userId,
    dayIndex,
  };
};

export const createAccessoryPlanAction = basePlan => {
  return {
    type: 'CREATE_CUSTOM_ACCESSORY_PLAN',
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

export const editAccessoryAction = () => {
  return {
    type: 'EDIT_ACCESSORY',
  };
};

export const editAccessory = accessoryInfo => async (dispatch, getState) => {
  await Util.editAccessory(accessoryInfo);
  return;
};

export const addAccessory = (userId, dayIndex) => async (dispatch, getState) => {
  //TODO: needs a function which inserts accessory into database

  //updates state with added accessory
  return dispatch(addAccessoryAction(userId, dayIndex));
};

export const createAccessoryPlan = (userId, basePlan) => async (dispatch, getState) => {
  //TODO: all async actions need pending/success/fail actions
  //inserts accessoryPlan into database
  await Util.createAccessoryPlan(userId, basePlan);
  //updates state using basePlan as a template
  return dispatch(createAccessoryPlanAction(basePlan));
};
