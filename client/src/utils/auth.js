export default {
  signUp: async data => {
    console.log('creating new user');
    let resp = await fetch(`/api/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    resp = await resp.json();
    return resp;
  },
  login: async login => {
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
};
