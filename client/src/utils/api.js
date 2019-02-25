import { fetchRequest } from './helper';
const api = {
  saveUserLifts: async data => {
    console.log('in save main lifts with data: ', data);
    try {
      const resp = await fetchRequest('/api/userInfo', 'PUT', data);
      console.log('RESPONSE', resp);
      // resp = await resp.json();
      return resp.ok ? true : resp.status;
    } catch (err) {
      if (err) console.error(err);
    }
  },
  createAccessoryPlan: async (userId, basePlan) => {
    try {
      let resp = await fetchRequest('/api/accessory', 'POST', { userId, basePlan });
      console.log(resp);
    } catch (err) {
      if (err) console.error(err);
    }
  },
  getAccessoryPlan: async userId => {
    console.log('getaccessoryplan, userid: ', userId);
    try {
      let resp = await fetch(`/api/accessory/${userId}`);
      resp = await resp.json();
      const respArray = [];
      if (resp.length) {
        const weekLength = resp[resp.length - 1].dayIndex;
        for (let i = 0; i < weekLength; i++) {
          respArray.push(resp.filter(item => item.dayIndex === i));
        }
      }
      console.log(respArray);

      return respArray;
    } catch (err) {
      if (err) console.error(err);
    }
  },
};

export default api;
