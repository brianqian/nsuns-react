import React from 'react';
import { connect } from 'react-redux';
import LoginSignup from '../loginSignup/loginSignup';
import AccessorySelector from '../AccessorySelector/AccessorySelector';
import './UserSettings.css';

function UserSettings(props) {
  return (
    <div className={props.settingsOpen ? 'userSettings' : 'userSettings__closed'}>
      <LoginSignup>
        <AccessorySelector />
      </LoginSignup>
    </div>
  );
}

const mapStateToProps = state => ({
  settingsOpen: state.userSettings.settingsOpen,
});

export default connect(mapStateToProps)(UserSettings);
