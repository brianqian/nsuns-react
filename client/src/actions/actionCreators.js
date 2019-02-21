export function addAccessories(name, set, rep, weight) {
  return {
    type: 'ADD_ACCESSORY',
    name,
    set,
    rep,
    weight,
  };
}

export function changeMax(lift, max) {
  return {
    type: 'CHANGE_MAX',
    lift,
    max,
  };
}
