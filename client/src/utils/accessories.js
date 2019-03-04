import { fetchRequest } from './';

export const createAccessoryPlan = async (userId, basePlan) => {
  try {
    const resp = await fetchRequest('/api/accessory', 'POST', { userId, basePlan });
    let newBase = [...basePlan];
    let { insertId } = resp;

    newBase.forEach(dayArray => {
      dayArray.forEach(accessory => {
        accessory.id = insertId;
        insertId++;
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
      // const weekLength = resp[resp.length - 1].dayIndex;
      let weekLength = [];
      resp.forEach(accessory => weekLength.push(accessory.dayIndex));
      weekLength = Math.max(...weekLength);
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
    const resp = fetchRequest(`/api/accessory`, 'DELETE', payload);
    return resp;
  } catch (err) {
    console.error(err);
  }
};
