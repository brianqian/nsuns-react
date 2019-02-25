export const calcDailyLift = function(percentage, tm) {
  const repWeight = tm * percentage;
  return Math.round(repWeight / 5) * 5;
};

export const repMaxToTM = function(rm) {
  const tMax = rm * 0.9;
  return Math.ceil(tMax / 5) * 5;
};

export const trainMaxToRM = function(tm) {
  const rMax = tm * 1.111111;
  return Math.ceil(rMax / 5) * 5;
};

export const swapTmRm = function(name, weight) {
  weight = parseInt(weight);
  if (name.includes('TM')) {
    const returnObj = { [name]: weight };
    name = name.split('TM')[0] + 'RM';
    const rmWeight = trainMaxToRM(weight);
    return { ...returnObj, [name]: rmWeight };
  } else if (name.includes('RM')) {
    const returnObj = { [name]: weight };
    name = name.split('RM')[0] + 'TM';
    const tmWeight = repMaxToTM(weight);
    return { ...returnObj, [name]: tmWeight };
  }
};

export const fetchRequest = async (route, method, data) => {
  let resp = await fetch(route, {
    method,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  resp = resp.json();
  return resp;
};
