import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';
import gintama from '../../img/gintama.png';

const DisplayRow = () => {
  const classes = useStyles();
  return (
    <div className={classes.displayCard}>
      <Link className={classes.heading} to='/manga'>
        <Typography variant="h5">Trending</Typography>
        <Typography variant="subtitle2">View All</Typography>
      </Link>
      <div className={classes.cardContainer}>
        <Link to='/gintama'>
          <img alt="gintama" src={gintama}></img>
          Gintama°
        </Link>
        <Link to='/gintama'>
          <img alt="gintama" src={gintama}></img>
          Gintama°
        </Link>
        <Link to='/gintama'>
          <img alt="gintama" src={gintama}></img>
          Gintama°
        </Link>
        <Link to='/gintama'>
          <img alt="gintama" src={gintama}></img>
          Gintama°
        </Link>
        <Link to='/gintama'>
          <img alt="gintama" src={gintama}></img>
          Gintama°
        </Link>
      </div>
    </div>
  );
};

export default DisplayRow;