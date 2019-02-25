import Api from '../utils/api';
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

export const getAccessoryPlan = userId => {
  return {
    type: 'UPDATE_ACCESSORY_PLAN',
    userId,
  };
};

export const changeAccessoryPlan = plan => {
  console.log('changevaration hit', plan);
  return {
    type: 'CHANGE_ACCESSORY_PLAN',
    plan,
  };
};

export const addAccessory = (userId, dayIndex) => async (dispatch, getState) => {
  //TODO: needs a function which inserts accessory into database

  //updates state with added accessory
  return dispatch(addAccessoryAction(userId, dayIndex));
};

export const createAccessoryPlan = (userId, basePlan) => async (dispatch, getState) => {
  //inserts accessoryPlan into database
  await Api.createAccessoryPlan(userId, basePlan);
  //updates state using basePlan as a template
  return dispatch(createAccessoryPlanAction(basePlan));
};
