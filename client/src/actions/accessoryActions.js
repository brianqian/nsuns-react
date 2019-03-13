import * as Util from '../utils/accessories';
export const addAccessorySuccess = basePlan => {
  return {
    type: 'ADD_ACCESSORY',
    basePlan,
  };
};

export const createAccessoryPlanSuccess = basePlan => {
  return {
    type: 'CREATE_ACCESSORY_PLAN_SUCCESS',
    basePlan,
  };
};

export const loadCustomAccessorySuccess = accessoryPlan => {
  return {
    type: 'LOAD_CUSTOM_ACCESSORY_SUCCESS',
    accessoryPlan,
  };
};

export const selectAccessoryPlanSuccess = accessoryPlan => {
  return {
    type: 'SELECT_ACCESSORY_PLAN_SUCCESS',
    accessoryPlan,
  };
};

export const editAccessorySuccess = basePlan => {
  return {
    type: 'EDIT_ACCESSORY_SUCCESS',
    basePlan,
  };
};

export const clearAccessories = () => {
  return {
    type: 'CLEAR_ACCESSORIES',
  };
};

export const deleteAccessorySuccess = basePlan => {
  return {
    type: 'DELETE_ACCESSORY_SUCCESS',
    basePlan,
  };
};
export const deleteAccessoryFail = error => {
  return {
    type: 'DELETE_ACCESSORY_FAIL',
    error,
  };
};

export const deleteAccessory = (payload, basePlan) => async dispatch => {
  //payload={id, dayIndex, userId}
  const resp = await Util.deleteAccessory(payload);
  return resp.ok ? dispatch(deleteAccessorySuccess(basePlan)) : dispatch(deleteAccessoryFail(resp));
};
export const selectAccessoryPlan = (plan, userId) => async dispatch => {
  console.log(plan, userId);
  await Util.saveAccessoryPlan(plan, userId);
  return dispatch(selectAccessoryPlanSuccess(plan));
};

export const addAccessory = (payload, basePlan) => async dispatch => {
  //payload={title, sets, reps, weight, userId, dayIndex, id}
  const { dayIndex, accIndex } = payload;
  const id = await Util.addAccessory(payload);
  basePlan[dayIndex][accIndex].id = id;
  return dispatch(addAccessorySuccess(basePlan));
};

export const editAccessory = (payload, basePlan) => async dispatch => {
  const resp = await Util.editAccessory(payload);
  if (resp.ok) return dispatch(editAccessorySuccess(basePlan));
};

export const createAccessoryPlan = (userId, basePlan) => async dispatch => {
  //TODO: all async actions need pending/success/fail actions
  //inserts accessoryPlan into database
  const newBase = await Util.createAccessoryPlan(userId, basePlan);
  //updates state using basePlan as a template

  return dispatch(createAccessoryPlanSuccess(newBase));
};

export const updateAccessoryDb = (payload, type, basePlan, accessoryPlan) => async dispatch => {
  const { title, sets, reps, weight, userId, dayIndex, id } = payload;
  const currentDay = basePlan[dayIndex];
  const accessoryIndex = currentDay.findIndex(accessory => accessory.id === id);
  const existingPlan = accessoryPlan === 'custom';
  if (type === 'delete') {
    currentDay.splice(accessoryIndex, 1);
    if (existingPlan) dispatch(deleteAccessory(payload, basePlan));
  } else if (type === 'add') {
    currentDay.push({ title, sets, reps, weight, dayIndex, id, userId });
    payload.accIndex = currentDay.length - 1;
    if (existingPlan) dispatch(addAccessory(payload, basePlan));
  } else if (type === 'edit') {
    currentDay[accessoryIndex] = { title, sets, reps, weight, id, dayIndex, userId };
    if (existingPlan) dispatch(editAccessory(payload, basePlan));
  }
  if (accessoryPlan !== 'custom') {
    const newBase = await Util.createAccessoryPlan(userId, basePlan);
    return dispatch(createAccessoryPlanSuccess(newBase));
  }
};
