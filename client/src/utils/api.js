import { fetchRequest } from './helper';
const api = {
  saveUserLifts: async data => {
    console.log('in save main lifts with data: ', data);
    try {
      const resp = await fetchRequest('/api/userInfo', data, 'PUT');
      console.log('RESPONSE', resp);
      // resp = await resp.json();
      return resp.ok ? true : resp.status;
    } catch (err) {
      if (err) console.error(err);
    }
  },
  createAccessoryPlan: async (userId, basePlan) => {
    try {
      let resp = await fetchRequest('/api/accessory', { userId, basePlan }, 'POST');
      console.log(resp);
    } catch (err) {
      if (err) console.error(err);
    }
  },
  getAccessoryPlan: async userId => {
    try {
      let resp = await fetchRequest('/api/accessory', userId, 'GET');
    } catch (err) {
      if (err) console.error(err);
    }
  },
};

export default api;
