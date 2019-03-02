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
    type: 'DELETE_ACCESSORY_SUCCESS',
    dayIndex,
    id,
    accIndex,
  };
};
export const deleteAccessoryFail = error => {
  return {
    type: 'DELETE_ACCESSORY_FAIL',
    error,
  };
};

export const deleteAccessory = payload => async dispatch => {
  const { id, dayIndex, accIndex, accessoryPlan } = payload;
  console.log('IN DELETE ACC ACTION', accessoryPlan);
  const resp = await Util.deleteAccessory(payload);

  return resp.ok
    ? dispatch(deleteAccessorySuccess(id, dayIndex, accIndex))
    : dispatch(deleteAccessoryFail(resp));
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

  return dispatch(createAccessoryPlanSuccess(newBase));
};

export const updateAccessoryDb = (payload, type, basePlan, accessoryPlan) => async dispatch => {
  const { title, sets, reps, weight, userId, dayIndex, id } = payload;
  const currentDay = basePlan[dayIndex];
  const accessoryIndex = currentDay.findIndex(accessory => accessory.id === id);
  console.log('BEFORE', currentDay);
  if (type === 'delete') {
    currentDay.splice(accessoryIndex, 1);
  } else if (type === 'add') {
    currentDay.push(title, sets, reps, weight);
  } else if (type === 'edit') {
    currentDay[dayIndex][accessoryIndex] = { title, sets, reps, weight };
  }
  console.log('AFTER', basePlan);
  if (accessoryPlan !== 'custom') {
    const newBase = await Util.createAccessoryPlan(userId, basePlan);
    return dispatch(createAccessoryPlanSuccess(newBase));
  }
};
