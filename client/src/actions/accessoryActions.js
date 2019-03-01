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

export const getAccessoryPlan = accessoryPlan => {
  return {
    type: 'GET_ACCESSORY_PLAN',
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

export const openAccessoryBox = (bool, index) => {
  return {
    type: 'TOGGLE_ACCESSORY_BOX',
    bool,
    index,
  };
};

export const clearAccessories = () => {
  return {
    type: 'CLEAR_ACCESSORIES',
  };
};

export const deleteAccessorySuccess = (id, dayIndex) => {
  return {
    type: 'DELETE_ACCESSORY',
    dayIndex,
    id,
  };
};

export const deleteAccessory = accessoryInfo => async dispatch => {
  const { id, dayIndex } = accessoryInfo;
  await Util.deleteAccessory(accessoryInfo);
  dispatch(deleteAccessorySuccess(id, dayIndex));
};

export const editAccessory = accessoryInfo => async dispatch => {
  const resp = await Util.editAccessory(accessoryInfo);
  if (resp.ok) return dispatch(editAccessorySuccess(accessoryInfo));
};

export const addAccessory = dayIndex => async dispatch => {
  //TODO: needs a function which inserts accessory into database

  //updates state with added accessory
  return dispatch(addAccessoryAction(dayIndex));
};

export const createAccessoryPlan = (userId, basePlan) => async dispatch => {
  //TODO: all async actions need pending/success/fail actions
  //inserts accessoryPlan into database
  const newBase = await Util.createAccessoryPlan(userId, basePlan);
  //updates state using basePlan as a template
  console.log('in create accessory plan thunk', userId, newBase);
  return dispatch(createAccessoryPlanSuccess(basePlan));
};
