import React, { useEffect } from 'react';
import uniqid from 'uniqid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { getTop } from '../../actions/top';
import RowEntry from './RowEntry';
import { useStyles } from './styles';

const TopTenList = ({ getTop, top }) => {
  const classes = useStyles();

  useEffect(() => {
    getTop('ANIME', 10);
  }, [getTop]);

  top = top.topState.top.Page

  const renderTopAnime = () => {
    let count = 0
    if (!top) {
      return (
        Array.from(Array(10).keys()).map(count => (
          <RowEntry key={uniqid()} isLoading={true} rank={count + 1} />
        ))
      );
    } else {
      console.log(top.media);
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
      <Link className={classes.heading} to='/manga'>
        <Typography variant="h5">TOP 100 Anime</Typography>
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

export default connect(mapStateToProps, { getTop })(TopTenList);