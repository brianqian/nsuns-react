export default {
  saveData: async function(data) {
    console.log('sending data', JSON.stringify(data));
    let response = await fetch('/api/save', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    response = await response.json();
    console.log(response);
    return response;
  },
};
