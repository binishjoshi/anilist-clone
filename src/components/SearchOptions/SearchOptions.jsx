import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TuneIcon from '@material-ui/icons/Tune';

import { searchQuery } from '../../actions/search';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import DropDown from '../DropDown/DropDown';

const SearchOption = ({ searchQuery }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState('');

  const onFormChange = e => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    searchQuery(inputValue, '');
  };

  return (
    <Container className={classes.searchOptionContainer}>
      <div className={classes.searchBoxesContainer}>
        <div className={classes.searchContainer}>
          <Typography>Search</Typography>
          <form onSubmit={onFormSubmit} >
            <input value={inputValue} onChange={onFormChange} className={classes.input} />
          </form>
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

export default connect(null, { searchQuery })(SearchOption);