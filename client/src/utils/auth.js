import { fetchRequest } from './helper';
const auth = {
  signUp: async data => {
    // console.log('creating new user');
    try {
      let resp = await fetchRequest('/auth/signUp', 'POST', data);
      return resp;
    } catch (err) {
      if (err) console.error(err);
    }
  },
  logIn: async data => {
    try {
      let resp = await fetchRequest('/auth/login', 'POST', data);
      if (resp.ok) return resp;
    } catch (err) {
      if (err) console.error(err);
    }
  },
};

export default auth;
