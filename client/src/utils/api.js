export default {
  saveUserInfo: async data => {
    console.log('in save main lifts with data: ', data);
    try {
      let resp = await fetch('/api/userInfo', {
        method: 'PUT',
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
  // getUserInfo: async userId => {
  //   try {
  //     if (userId) {
  //       let resp = await fetch(`/api/userInfo?user=${userId}`);
  //       resp = await resp.json();
  //       return resp;
  //     }
  //   } catch (err) {
  //     if (err) console.error(err);
  //   }
  // },
};
