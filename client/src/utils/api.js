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
    let response = await fetch(`/api/getMain?user=${userId}`);
    response = await response.json();
    return response;
  },
};
