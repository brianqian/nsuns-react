import { fetchRequest } from './';

export const saveUserLifts = async data => {
  try {
    const resp = await fetchRequest('/api/userInfo', 'PUT', data);
    console.log('RESPONSE', resp);
    return resp.ok ? true : resp.status;
  } catch (err) {
    if (err) console.error(err);
  }
};
