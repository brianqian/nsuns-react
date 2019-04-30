import * as Action from "../../actions";

const generateSettings = (
  userId,
  accessoryPlan,
  custom,
  standard,
  variation,
  timerOption,
  wbOption
) => {
  const userSettings = {
    //GENERATE ACCESSORY OPTIONS
    accOptions: {
      userId,
      action: Action.selectAccessoryPlan,
      title: "Accessory",
      defaultValue: accessoryPlan,
      options: [
        {
          value: "arms",
          text: "Arms",
        },
        {
          value: "legs",
          text: "Legs",
        },
      ],
    },
    //GENERATE STANDARD OPTIONS
    standardOptions: {
      userId,
      action: Action.selectStandard,
      title: "Standard",
      defaultValue: standard,
      options: [
        {
          value: "lbs",
          text: "Lbs",
        },
        {
          value: "kg",
          text: "Kg",
        },
        {
          value: "custom",
          text: "Custom",
        },
      ],
    },
    //GENERATE VARIATION OPTIONS
    variationOptions: {
      userId,
      action: Action.selectVariation,
      title: "Variation",
      defaultValue: variation,
      options: [
        {
          value: "5day",
          text: "5 day",
        },
        {
          value: "4day",
          text: "4 day",
        },
      ],
    },
    //GENERATE WEIGHT BOX OPTIONS
    weightBoxOptions: {
      userId,
      action: Action.selectWeightBoxOption,
      title: "Click effect: ",
      defaultValue: wbOption,
      options: [
        {
          value: "mark",
          text: "Mark (only)",
        },
        {
          value: "timer",
          text: "Timer",
        },
      ],
    },
    //GENERATE TIMER BOX OPTIONS
    timerBoxOptions: {
      userId,
      action: Action.selectTimerOption,
      title: "Rest Time: ",
      defaultValue: timerOption,
      options: [
        {
          value: "30",
          text: "0:30",
        },
        {
          value: "60",
          text: "1:00",
        },
        {
          value: "90",
          text: "1:30",
        },
        {
          value: "120",
          text: "2:00",
        },
      ],
    },
  };

  if (custom) userSettings.accOptions.options.push({ value: "custom", text: "Custom" });
  return userSettings;
};

export default generateSettings;
