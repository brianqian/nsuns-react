import * as Util from '../utils/accessories';
export const addAccessorySuccess = (id, dayIndex, title, sets, reps, weight) => {
  return {
    type: 'ADD_ACCESSORY',
    id,
    dayIndex,
    title,
    sets,
    reps,
    weight,
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

export const editAccessorySuccess = payload => {
  return {
    type: 'EDIT_ACCESSORY_SUCCESS',
    payload,
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

export const deleteAccessorySuccess = (id, dayIndex, accIndex) => {
  return {
    type: 'DELETE_ACCESSORY',
    dayIndex,
    id,
    accIndex,
  };
};

export const deleteAccessory = payload => async dispatch => {
  const { id, dayIndex, accIndex } = payload;
  await Util.deleteAccessory(payload);
  return dispatch(deleteAccessorySuccess(id, dayIndex, accIndex));
};

export const addAccessory = payload => async dispatch => {
  const { dayIndex, title, sets, reps, weight } = payload;
  const id = await Util.addAccessory(payload);
  console.log(dayIndex);
  return dispatch(addAccessorySuccess(id, dayIndex, title, sets, reps, weight));
};

export const editAccessory = payload => async dispatch => {
  const resp = await Util.editAccessory(payload);
  if (resp.ok) return dispatch(editAccessorySuccess(payload));
};

export const createAccessoryPlan = (userId, basePlan) => async dispatch => {
  //TODO: all async actions need pending/success/fail actions
  //inserts accessoryPlan into database
  const newBase = await Util.createAccessoryPlan(userId, basePlan);
  //updates state using basePlan as a template

  return dispatch(createAccessoryPlanSuccess(basePlan));
};
