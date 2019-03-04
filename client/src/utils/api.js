import { fetchRequest } from './';

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
