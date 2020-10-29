import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';
import Skeleton from '@material-ui/lab/Skeleton';

const DisplayRow = ({ heading, trending, type }) => {
  const classes = useStyles();

  const renderCardRow = () => {
    if (typeof (trending[type]) !== "undefined") {
      let data = trending[type].data.Page.media;
      return data.map(entry => {
        return (
          <Link to={`/anime/${entry.id}`} key={uniqid()}>
            <img alt="gintama" src={entry.coverImage.large}></img>
            <Typography variant="body2">{entry.title.english}</Typography>
          </Link>
        );
      });
    } else {
      return (
        <Skeleton animation="wave" />
      )
    }
  }

  return (
    <div className={classes.displayCard}>
      <Link className={classes.heading} to='/manga'>
        <Typography variant="h5">{heading}</Typography>
        <Typography variant="subtitle2">View All</Typography>
      </Link>
      <div className={classes.cardContainer}>
        {
          renderCardRow()
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trending: state.trendingState
});

export default connect(mapStateToProps)(DisplayRow);