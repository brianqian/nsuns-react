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

export const addAccessory = (userId, dayIndex) => async (dispatch, getState) => {
  return dispatch(addAccessoryAction(userId, dayIndex));
};

export const createAccessoryPlan = (userId, basePlan) => async (dispatch, getState) => {
  console.log('accessory thunk hit');
  const resp = await Api.createAccessoryPlan(userId, basePlan);
  return dispatch(createAccessoryPlanAction(basePlan));
};
