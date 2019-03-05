import { fetchRequest } from '.';

export const saveUserLifts = async data => {
  try {
    const resp = await fetchRequest('/api/userInfo/lifts', 'PUT', data);
    console.log('RESPONSE', resp);
    return resp.ok ? true : resp.status;
  } catch (err) {
    console.error(err);
  }
};

export const selectStandard = async standard => {
  try {
    return await fetchRequest(`/api/userInfo/standard/${standard}`, 'PUT');
  } catch (err) {
    console.error(err);
  }
};

export const setTimerOption = async option => {
  try {
    return await fetchRequest(`/api/userInfo/timer`, 'PUT', { option });
  } catch (err) {
    console.error(err);
  }
};

export const setWeightBoxOption = async option => {
  try {
    return await fetchRequest(`/api/userInfo/weightbox`, 'PUT', { option });
  } catch (err) {
    console.error(err);
  }
};
export const setVariation = async option => {
  try {
    return await fetchRequest(`/api/userInfo/variation`, 'PUT', { option });
  } catch (err) {
    console.error(err);
  }
};
