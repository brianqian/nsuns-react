export default {
  saveUserLifts: async data => {
    console.log('in save main lifts with data: ', data);
    try {
      let resp = await fetch('/api/userInfo', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('RESPONSE', resp);
      // resp = await resp.json();
      return resp.ok ? true : resp.status;
    } catch (err) {
      if (err) console.error(err);
    }
  },
};
