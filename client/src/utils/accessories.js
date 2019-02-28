import { fetchRequest } from './';

export const createAccessoryPlan = async (userId, basePlan) => {
  try {
    let resp = await fetchRequest('/api/accessory', 'POST', { userId, basePlan });
    console.log(resp);
  } catch (err) {
    if (err) console.error(err);
  }
};
export const getAccessoryPlan = async userId => {
  try {
    let resp = await fetch(`/api/accessory/${userId}`);
    resp = await resp.json();
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
    if (err) console.error(err);
  }
};

export const editAccessory = async accessoryInfo => {
  try {
    console.log('edit accessory', accessoryInfo);
    let resp = await fetchRequest(`/api/accessory/${accessoryInfo.userId}`, 'PUT', accessoryInfo);
    console.log(resp);
    return resp;
  } catch (err) {
    if (err) console.error(err);
  }
  return;
};
