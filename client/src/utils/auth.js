export default {
  signUp: async data => {
    // console.log('creating new user');
    try {
      let resp = await fetch(`/auth/signUp`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      resp = await resp.json();
      return resp;
    } catch (err) {
      if (err) console.error(err);
    }
  },
  logIn: async data => {
    try {
      let resp = await fetch(`/auth/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      resp = await resp.json();
      return resp;
    } catch (err) {
      if (err) console.error(err);
    }
  },
};
