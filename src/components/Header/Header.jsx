import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { ThemeProvider } from '@material-ui/core/styles';

import SignUp from './SignUp';
import { theme, useStyles } from './styles';

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar>
            <div className={classes.bar}>
              <Link className={classes.links} to='/'>Home</Link>
              <div className={classes.linksContainer}>
                <Link className={classes.links} to='/search/anime'>Browse</Link>
                <Link className={classes.links} to='/anime'>Social</Link>
                <Link className={classes.links} to='/login'>Forum</Link>
                <Link className={classes.login} to='/login'>Login</Link>
                <SignUp>Sign Up</SignUp>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
