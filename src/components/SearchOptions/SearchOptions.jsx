import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TuneIcon from '@material-ui/icons/Tune';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import DropDown from '../DropDown/DropDown';

const SearchOption = () => {
  const classes = useStyles();
  return (
    <Container className={classes.searchOptionContainer}>
      <div className={classes.searchBoxesContainer}>
        <div className={classes.searchContainer}>
          <Typography>Search</Typography>
          <input className={classes.input} />     
        </div>

        <div>
          <Typography>Genres</Typography> 
          <DropDown optionData='genres' />
        </div>

        <div>
          <Typography>Year</Typography>
          <DropDown optionData='year' />
        </div>

        <div>
          <Typography>Season</Typography>
          <DropDown optionData='season' />
        </div>

        <div>
          <Typography>Format</Typography>
          <DropDown optionData='format' /> 
        </div>        
      </div>

      <Button variant="contained" className={classes.button}>
        <TuneIcon />
      </Button>
    </Container>
  );
};

export default SearchOption;