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
