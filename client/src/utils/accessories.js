import { fetchRequest } from './';

export const createAccessoryPlan = async (userId, basePlan) => {
  try {
    const resp = await fetchRequest('/api/accessory', 'POST', { userId, basePlan });
    let newBase = [...basePlan];
    let { insertId } = resp;
    newBase.forEach(dayArray => {
      dayArray.forEach(accessory => {
        accessory.id = insertId;
        insertId += 1;
      });
    });
    return newBase;
  } catch (err) {
    console.error(err);
  }
};
export const getAccessoryPlan = async userId => {
  try {
    let resp = await fetch(`/api/accessory/${userId}`);
    resp = await resp.json();
    const respArray = [];
    if (resp.length) {
      const weekLength = Math.max(...resp.map(accessory => accessory.dayIndex));
      // return [...Array(weekLength + 1).keys()].map(dayIndex =>
      //   resp.filter(accessory => accessory.dayIndex === dayIndex)
      // );
      for (let i = 0; i <= weekLength; i++) {
        respArray.push(resp.filter(item => item.dayIndex === i));
      }
    }

    return respArray;
  } catch (err) {
    console.error(err);
  }
};
export const addAccessory = async payload => {
  const resp = await fetchRequest(`api/accessory/${payload.userId}`, 'POST', payload);
  return resp;
};
export const editAccessory = async payload => {
  try {
    const resp = await fetchRequest(`/api/accessory/${payload.userId}`, 'PUT', payload);
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const deleteAccessory = async payload => {
  try {
    console.log('DELETE', payload);
    const resp = fetchRequest(`/api/accessory`, 'DELETE', payload);
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const saveAccessoryPlan = async (plan, id) => {
  try {
    return await fetchRequest(`/api/accessory`, 'PUT', { plan, id });
  } catch (err) {
    console.error(err);
  }
};
