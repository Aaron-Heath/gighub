import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import './style.css'

function Header() {
  const [user, setUser] = useState(null);

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
    setUser(null);
  };

  return (
    <div style={headerStyle}>
      {/* App Bar */}
      <AppBar position="relative" style={{ ...titleStyle, background: '#FFE5A1' }}>
        <Toolbar>
          <IconButton edge="start" style={menuButtonStyle} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <h3 style={titleStyle}>Gighub</h3>
          <div style={signedInUserStyle}>Hello, {user ? user.email.split("@")[0] : 'Guest'}</div>
          {user ? (
            <div style={signedInUserStyle}>
              <Button color="inherit"  onClick={handleAuthentication}>Logout</Button>
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

