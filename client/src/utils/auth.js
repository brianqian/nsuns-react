export default {
  signUp: async data => {
    // console.log('creating new user');
    try {
      let resp = await fetch(`/api/create`, {
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
  login: async data => {
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
