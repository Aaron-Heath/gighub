import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import './style.css'

import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
// import Header from './Header'

function Header() {

  // Store current user from token or null
  const curUserId = Auth.getToken() ? Auth.getUser().data._id : null;
  console.log(`User ID: ${curUserId}`);
  
  const { loading, data } = useQuery(GET_USER, {
    variables: {userId: curUserId}
  });
  
  // set queried user to null if no data returned
  const queriedUser = data ? data.userById : null

  //handle logout
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  const headerStyle = {
    flexGrow: 1,
  };

  const menuButtonStyle = {
    marginRight: '-900px',
    color: '#204B57' // Adjust the value according to your preference
  };

  const titleStyle = {
    flexGrow: 1,
    color: '#711F31',
    fontFamily: 'Bungee' //text color   
  };

  const linkStyle = {
    color: '#711F31',
    textDecoration: 'none',
    // fontFamily: 'Bungee'
  };

  const signedInUserStyle = {
    padding: '8px',
  };

  const handleAuthentication = () => {
    // Simulate signing out by updating the user state
  };

  return (
    <div style={headerStyle}>
      {/* App Bar */}
      <AppBar position="fixed" style={{ ...titleStyle, background: '#FFE5A1' }}>
        <Toolbar>
          {/* <IconButton edge="start" style={menuButtonStyle} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <h3 className='title' style={titleStyle}>Gighub</h3>
          <div className='greetings' style={signedInUserStyle}>Hello, {queriedUser ? queriedUser.first : 'Guest'}</div>
          {Auth.loggedIn() ? (
            <div style={signedInUserStyle}>
              <Button color="inherit" style={{fontFamily: 'Bungee', fontSize: '10px', color: '#204B57'}}  onClick={logout}>Logout</Button>
            </div>
          ) : (
            <div>
              <Link to="/login" style={linkStyle}>
                <Button color="inherit" style={{fontFamily: 'Bungee', fontSize: '10px', color: '#204B57'}}>Login</Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
  