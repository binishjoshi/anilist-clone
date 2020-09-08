import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { useStyles, theme } from './styles';

const CustomButton = () => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="large"
        >
          Join now
          <ArrowRightIcon />
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default CustomButton;