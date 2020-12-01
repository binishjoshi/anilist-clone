import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TuneIcon from '@material-ui/icons/Tune';
import ClearIcon from '@material-ui/icons/Clear';

import { searchQuery, putQuery } from '../../actions/search';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import DropDown from '../DropDown/DropDown';

const SearchOption = ({ searchQuery, searchState, putQuery }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  // const { searchConstraints } = searchState;
  // const [searchConstraints, changeSearchConstraints] = React.useState({});
  const [genre, changeGenre] = React.useState('');
  const [seasonYear, changeSeasonYear] = React.useState('');
  const [season, changeSeason] = React.useState('');
  const [format, changeFormat] = React.useState('');
  let searchConstraints = {
    genre: genre,
    seasonYear: seasonYear,
    season: season,
    format: format
  }

  const onFormChange = e => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    console.log(searchConstraints);
    searchQuery({ search: inputValue, ...searchConstraints });
  };

  const renderSearchConstraints = () => {
    if (searchConstraints !== '') {
      return (
        <div className={classes.searchConstraintsContainer}>
          {
            Object.keys(searchConstraints).map(key => {
              if (searchConstraints[key] !== '') {
                return (
                  <div className={classes.constraintContainer} key={uniqid()} onClick={() => putQuery(key, '')}>
                    <Typography variant="body2">
                      {searchConstraints[key]}
                    </Typography>
                    <ClearIcon fontSize="small" />
                  </div>
                );
              } return (null);
            })
          }
        </div>
      );
    }
  };

  return (
    <div>
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
            <DropDown optionData='genre' changeSearchConstraints={changeGenre} />
          </div>

          <div>
            <Typography>Year</Typography>
            <DropDown optionData='year' changeSearchConstraints={changeSeasonYear} />
          </div>

          <div>
            <Typography>Season</Typography>
            <DropDown optionData='season' changeSearchConstraints={changeSeason} />
          </div>

          <div>
            <Typography>Format</Typography>
            <DropDown optionData='format' changeSearchConstraints={changeFormat} />
          </div>
        </div>

        <Button variant="contained" className={classes.button}>
          <TuneIcon />
        </Button>
      </Container>
      {
        renderSearchConstraints()
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchState: state.searchQuery
});

export default connect(mapStateToProps, { searchQuery, putQuery })(SearchOption);