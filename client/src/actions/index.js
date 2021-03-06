export * from './userAuthActions';
export * from './userLiftActions';
export * from './accessoryActions';
export * from './userSettingsActions';

export const addAccessories = (name, set, rep, weight) => {
  return {
    type: 'ADD_ACCESSORY',
    name,
    set,
    rep,
    weight,
  };
};

export const openSettings = settingsOpenBool => {
  return {
    type: 'OPEN_CLOSE_SETTINGS',
    settingsOpenBool,
  };
};
