export default {
  saveMainLifts: async function(data) {
    let response = await fetch('/api/saveMain', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    return response;
  },
  getMainLifts: async function(userId) {
    if (userId) {
      console.log('API.JS - getting user lifts: ', userId);
      let response = await fetch(`/api/getMain?user=${userId}`);
      response = await response.json();
      console.log('API.JS - returning lifts: ', response);
      return response;
    } else {
      console.log('creating new user');
      let response = await fetch(`/api/create`);
      response = await response.json();
      return this.getMainLifts(response);
    }
  },
};
