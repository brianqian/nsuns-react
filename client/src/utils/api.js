const api = {
  saveUserLifts: async data => {
    console.log('in save main lifts with data: ', data);
    try {
      const resp = await fetch('/api/userInfo', {
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
  createAccessoryPlan: async (userId, basePlan) => {
    try {
      let resp = await fetch('/api/accessory/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ userId, basePlan }),
      });
      console.log(resp);
    } catch (err) {
      if (err) console.error(err);
    }
  },
};

export default api;
