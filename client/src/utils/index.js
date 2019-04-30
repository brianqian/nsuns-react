export * from "./accessories";
export * from "./userInfo";
export * from "./auth";
export * from "./userSettings";

export const calcDailyLift = function(percentage, tm, standard = "lbs") {
  standard = standard === "kg" ? 2.5 : 5;
  const repWeight = tm * percentage;
  return Math.round(repWeight / standard) * standard;
};

export const repMaxToTM = function(rm, standard = "lbs") {
  standard = standard === "kg" ? 2.5 : 5;
  const tMax = rm * 0.9;
  return Math.ceil(tMax / standard) * standard;
};

export const trainMaxToRM = function(tm, standard = "lbs") {
  standard = standard === "kg" ? 2.5 : 5;
  const rMax = tm * 1.111111;
  return Math.ceil(rMax / standard) * standard;
};

export const swapTmRm = function(name, weight, standard) {
  weight = standard === "kg" ? parseFloat(parseFloat(weight).toFixed(1)) : parseInt(weight);
  if (name.includes("TM")) {
    const returnObj = { [name]: weight };
    name = name.split("TM")[0] + "RM";
    const rmWeight = trainMaxToRM(weight, standard);
    return { ...returnObj, [name]: rmWeight };
  } else if (name.includes("RM")) {
    const returnObj = { [name]: weight };
    name = name.split("RM")[0] + "TM";
    const tmWeight = repMaxToTM(weight, standard);
    return { ...returnObj, [name]: tmWeight };
  }
};

export const fetchRequest = async (route, method, data) => {
  let resp = await fetch(route, {
    method,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  resp = await resp.json();
  return resp;
};
