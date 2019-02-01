export default {
  saveMainLifts: async data => {
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
  getMainLifts: async userId => {
    try {
      if (userId) {
        let resp = await fetch(`/api/getMain?user=${userId}`);
        resp = await resp.json();
        return resp;
      }
    } catch (err) {
      if (err) console.error(err);
    }
  },
};
