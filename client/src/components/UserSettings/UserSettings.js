import React from 'react';
import { connect } from 'react-redux';
import LoginSignup from '../LoginSignup/LoginSignup';
// import AccessorySelector from './AccessorySelector/AccessorySelector';
// import StandardSelector from './StandardSelector/StandardSelector';
// import WeightBoxSelector from './WeightBoxSelector/WeightBoxSelector';
import BasicSelector from './BasicSelector/BasicSelector';
import './UserSettings.css';
import * as Action from '../../actions';
// { selectAccessoryPlan, selectStandard, selectVariation, setTimerOption }

function UserSettings(props) {
  const {
    userId,
    accessories: { accessoryPlan, custom },
    userSettings: { standard, nsunsVariation, timerOption, wbOption, capWeekNum },
  } = props;

  //GENERATE ACCESSORY Options
  const accOptions = {
    userId,
    action: Action.selectAccessoryPlan,
    title: 'Accessory',
    defaultValue: accessoryPlan,
    options: [
      {
        value: 'arms',
        text: 'Arms',
      },
      {
        value: 'legs',
        text: 'Legs',
      },
    ],
  };
  if (custom) accOptions.options.push({ value: 'custom', text: 'Custom' });

  //GENERATE STANDARD Options
  const standardOptions = {
    userId,
    action: Action.selectStandard,
    title: 'Standard',
    defaultValue: standard,
    options: [
      {
        value: 'lbs',
        text: 'Lbs',
      },
      {
        value: 'kg',
        text: 'Kg',
      },
    ],
  };
  //GENERATE VARIATION Options
  const variationOptions = {
    userId,
    action: Action.selectVariation,
    title: 'Variation',
    defaultValue: nsunsVariation,
    options: [
      {
        value: '5day',
        text: '5 day',
      },
      {
        value: '4day',
        text: '4 day',
      },
      {
        value: 'cap3',
        text: 'CAP3',
      },
    ],
  };

  const currentWeekOptions = {
    userId,
    action: Action.selectCapWeekNum,
    title: 'Current Week: ',
    defaultValue: capWeekNum,
    options: [
      {
        value: '1',
        text: '1',
      },
      {
        value: '2',
        text: '2',
      },
      {
        value: '3',
        text: '3',
      },
    ],
  };

  const weightBoxOptions = {
    userId,
    action: Action.selectWeightBoxOption,
    title: 'Click effect: ',
    defaultValue: wbOption,
    options: [
      {
        value: 'mark',
        text: 'Mark (only)',
      },
      {
        value: 'timer',
        text: 'Timer',
      },
    ],
  };

  const TimerBoxOptions = {
    userId,
    action: Action.selectTimerOption,
    title: 'Rest Time: ',
    defaultValue: timerOption,
    options: [
      {
        value: '30',
        text: '0:30',
      },
      {
        value: '60',
        text: '1:00',
      },
      {
        value: '90',
        text: '1:30',
      },
      {
        value: '120',
        text: '2:00',
      },
    ],
  };
  return (
    <div className={props.settingsOpen ? 'userSettings' : 'userSettings__closed'}>
      <LoginSignup>
        <BasicSelector {...standardOptions} />
        <BasicSelector {...accOptions} />
        <BasicSelector {...variationOptions} />
        {nsunsVariation === 'cap3' && <BasicSelector {...currentWeekOptions} />}
        <BasicSelector {...weightBoxOptions} />
        {wbOption === 'timer' && <BasicSelector {...TimerBoxOptions} />}
      </LoginSignup>
    </div>
  );
}

const mapStateToProps = state => ({
  settingsOpen: state.userSettings.settingsOpen,
  accessories: state.accessories,
  userSettings: state.userSettings,
  userId: state.userAuth.userId,
});

export default connect(mapStateToProps)(UserSettings);
