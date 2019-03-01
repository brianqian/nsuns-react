import { fetchRequest } from './';

export const createAccessoryPlan = async (userId, basePlan) => {
  try {
    console.log('CREATING ACCESSORY PLAN', basePlan);
    const resp = await fetchRequest('/api/accessory', 'POST', { userId, basePlan });
    let newBase = [...basePlan];
    let { insertId } = resp;

    newBase.forEach(dayArray => {
      dayArray.forEach(accessory => {
        accessory.id = insertId;
        insertId++;
      });
    });
    console.log(newBase);
    return newBase;
  } catch (err) {
    console.error(err);
  }
};
export const getAccessoryPlan = async userId => {
  try {
    let resp = await fetch(`/api/accessory/${userId}`);
    resp = await resp.json();
    console.log('getting acc plan', resp);
    const respArray = [];
    if (resp.length) {
      const weekLength = resp[resp.length - 1].dayIndex;
      console.log(weekLength);
      for (let i = 0; i <= weekLength; i++) {
        respArray.push(resp.filter(item => item.dayIndex === i));
      }
    }
    console.log(respArray);

    return respArray;
  } catch (err) {
    console.error(err);
  }
};
export const addAccessory = async payload => {
  const resp = await fetchRequest(`api/accessory/${payload.userId}`, 'POST', payload);
  console.log(resp);
  return resp;
};
export const editAccessory = async payload => {
  try {
    console.log('edit accessory', payload);
    const resp = await fetchRequest(`/api/accessory/${payload.userId}`, 'PUT', payload);
    return resp;
  } catch (err) {
    console.error(err);
  }
  return;
};

export const deleteAccessory = async payload => {
  try {
    const resp = fetchRequest(`/api/accessory`, 'DELETE', payload);
    console.log(resp);
  } catch (err) {
    console.error(err);
  }
};
