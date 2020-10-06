import React, { useEffect } from 'react';
import uniqid from 'uniqid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { getTop } from '../../actions/top';
import RowEntry from './RowEntry';
import { useStyles } from './styles';

const TopAnimeList = ({ getTop, top, number }) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('number is ' + String(number));
    getTop('ANIME', number);
  }, [getTop, number]);

  top = top.topState.top.Page

  const renderTopAnime = () => {
    let count = 0
    if (!top) {
      return (
        Array.from(Array(number).keys()).map(count => (
          <RowEntry key={uniqid()} isLoading={true} rank={count + 1} />
        ))
      );
    } else {
      return (
        top.media.map(anime => {
          count++;
          return (
            <RowEntry key={uniqid()} anime={anime} rank={count} />
          )
        })
      );
    }
  };

  return (
    <div className={classes.listContainer}>
      <Link className={classes.heading} to='/top50'>
        <Typography variant="h5">TOP {number} Anime</Typography>
        <Typography variant="subtitle2">View All</Typography>
      </Link>
      {renderTopAnime()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    top: state
  };
};

export default connect(mapStateToProps, { getTop })(TopAnimeList);