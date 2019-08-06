import { fetchRequest } from ".";

export const saveUserLifts = async data => {
  try {
    const resp = await fetchRequest("/userInfo/lifts", "PUT", data);
    return resp.ok ? true : resp.status;
  } catch (err) {
    console.error(err);
  }
};
