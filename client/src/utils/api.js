export default {
  saveMainLifts: async function(data) {
    console.log('in save main lifts with data: ', data);
    try {
      let resp = await fetch('/api/saveMain', {
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
  userLogin: async function(login) {
    let resp = await fetch(`/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(login),
    });
    resp = await resp.json();
    return resp;
  },
  getMainLifts: async function(userId) {
    try {
      if (userId) {
        let resp = await fetch(`/api/getMain?user=${userId}`);
        resp = await resp.json();
        return resp;
      } else {
        console.log('creating new user');
        let resp = await fetch(`/api/create`);
        resp = await resp.json();
        return this.getMainLifts(resp);
      }
    } catch (err) {
      if (err) console.error(err);
    }
  },
};
