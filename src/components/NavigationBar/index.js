import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl';

import {
  Wrapper,
} from './wrappers';

const NavigationBar = ({ title, onLogout }) => {
  return (
    <Wrapper>
      <div className="mdl-typography--display-1">{title}</div>
      <div style={{ position: 'relative'}}>
        <IconButton name="account_circle" id="navigation-bar-user-menu" />
        <Menu target="navigation-bar-user-menu" align="right">
          <MenuItem>Profile</MenuItem>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
          </Menu>
      </div>
    </Wrapper>
  );
}

export default NavigationBar;
