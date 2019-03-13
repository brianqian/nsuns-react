import React from 'react';
import { connect } from 'react-redux';
import LoginSignup from '../LoginSignup/LoginSignup';
import BasicSelector from './BasicSelector/BasicSelector';
import * as Action from '../../actions';
import { openSettings } from '../../actions';
import styled from 'styled-components';
import Input from '../InputNumber/InputNumber';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #596d83;
  z-index: 10;
  position: absolute;
  transition: transform 0.25s;
  ${props => (props.open ? '' : 'transform: translate(-200px);')}
  overflow: hidden;
`;

function UserSettings(props) {
  const {
    userId,
    accessories: { accessoryPlan, custom },
    userSettings: { standard, variation, timerOption, wbOption, cap3Week },
  } = props;

  //GENERATE ACCESSORY OPTIONS
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
      {
        value: 'cap3',
        text: 'CAP3',
      },
    ],
  };
  if (custom) accOptions.options.push({ value: 'custom', text: 'Custom' });

  //GENERATE STANDARD OPTIONS
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
      {
        value: 'custom',
        text: 'Custom',
      },
    ],
  };
  //GENERATE VARIATION OPTIONS
  const variationOptions = {
    userId,
    action: Action.selectVariation,
    title: 'Variation',
    defaultValue: variation,
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
    action: Action.selectCap3Week,
    title: 'Current Week: ',
    defaultValue: cap3Week,
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

  //GENERATE WEIGHT BOX OPTIONS
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

  const submitRounding = val => {
    props.dispatch();
  };

  return (
    <Container open={props.settingsOpen}>
      <LoginSignup />
      <BasicSelector {...standardOptions} />
      {standard === custom && <Input label="Custom Rounding: " onSubmit={submitRounding} />}
      <BasicSelector {...accOptions} />
      <BasicSelector {...variationOptions} />
      {variation === 'cap3' && <BasicSelector {...currentWeekOptions} />}
      <BasicSelector {...weightBoxOptions} />
      {wbOption === 'timer' && <BasicSelector {...TimerBoxOptions} />}

      <button onClick={() => props.dispatch(openSettings(false))}>Close Settings</button>
    </Container>
  );
}

const mapStateToProps = state => ({
  settingsOpen: state.userSettings.settingsOpen,
  accessories: state.accessories,
  userSettings: state.userSettings,
  userId: state.userAuth.userId,
});

export default connect(mapStateToProps)(UserSettings);
