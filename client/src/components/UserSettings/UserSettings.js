import React from 'react';
import { connect } from 'react-redux';
import LoginSignup from '../loginSignup/loginSignup';
import AccessorySelector from '../AccessorySelector/AccessorySelector';
import './UserSettings.css';

function UserSettings(props) {
  return (
    <div className={props.settingsOpen ? 'userSettings' : 'userSettings__closed'}>
      <LoginSignup />
      <AccessorySelector customOption={props.accessories.custom !== undefined} />
    </div>
  );
}

const mapStateToProps = state => ({
  accessories: state.accessories,
  settingsOpen: state.userSettings.settingsOpen,
});

export default connect(mapStateToProps)(UserSettings);
