import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    'color': 'white',
    'textDecoration': 'none'
  },
  signedInUser: {
    padding: theme.spacing(1),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* App Bar */}

      <AppBar
        position="relative"
        background="#000000"
        className={clsx(classes.appBar)}
      >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Gighub 
          </Typography>

          {/* The following lines are commented out
          <div className={classes.signedInUser}>Hello, {user ? user.email.split("@")[0] : 'Guest'}</div>
          {user ? (
            <div className={classes.signedInUser}>
              <Button color="inherit" onClick={handleAuthentication}>Logout</Button>
            </div>
          ) : (
            <div>
              <Link to="/login" className={classes.linkStyle}>
                <Button color="inherit">Login</Button>
              </Link>
            </div>
          )} */}

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
