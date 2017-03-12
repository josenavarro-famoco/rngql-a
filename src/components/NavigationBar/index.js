import React from 'react';
import { Header, IconButton, Menu, MenuItem } from 'react-mdl';

import {
  Wrapper,
} from './wrappers';

const NavigationBar = ({ title, onLogout }) => {
  return (
    <Header title={title}>
      <div style={{ position: 'relative'}}>
        <IconButton name="account_circle" id="navigation-bar-user-menu" />
        <Menu target="navigation-bar-user-menu" align="right">
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </Header>
  );
}

export default NavigationBar;
