import { fetchRequest } from './';

export const selectStandard = async (standard, userId) => {
  try {
    return await fetchRequest(`/userInfo/standard/${standard}`, 'PUT', { userId });
  } catch (err) {
    console.error(err);
  }
};

export const setTimerOption = async (option, userId) => {
  try {
    return await fetchRequest(`/userInfo/timer`, 'PUT', { option, userId });
  } catch (err) {
    console.error(err);
  }
};

export const setWeightBoxOption = async (option, userId) => {
  try {
    return await fetchRequest(`/userInfo/weightbox`, 'PUT', { option, userId });
  } catch (err) {
    console.error(err);
  }
};
export const setVariation = async (option, userId) => {
  try {
    return await fetchRequest(`/userInfo/variation`, 'PUT', { option, userId });
  } catch (err) {
    console.error(err);
  }
};
export const getUserSettings = async userId => {
  try {
    console.log(userId);
    let resp = await fetch(`/userInfo/${userId}`);
    resp = await resp.json();
    return resp;
  } catch (err) {
    console.error(err);
  }
};
