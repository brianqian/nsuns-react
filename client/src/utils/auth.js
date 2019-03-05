import { fetchRequest } from './';

export const signUp = async data => {
  // console.log('creating new user');
  try {
    let resp = await fetchRequest('/auth/signUp', 'POST', data);
    return resp;
  } catch (err) {
    if (err) console.error(err);
  }
};
export const logIn = async data => {
  try {
    let userInfo = await fetchRequest('/auth/login', 'POST', data);
    return userInfo;
  } catch (err) {
    if (err) console.error(err);
  }
};
export const jwtLogin = async token => {
  try {
    let resp = await fetchRequest('/auth/jwtLogin', 'POST', { token });
    return resp;
  } catch (err) {
    if (err) throw err;
  }
};
