import React from 'react';

import { rowStyles, genreStyles } from './styles';
import gintama from '../../img/gintama.png';
import { Typography } from '@material-ui/core';

const RowEntry = () => {
  const classes = rowStyles();
  return (
    <div className={classes.rowContainer}>
      <div className={classes.rank}>#1</div>
      <div className={classes.rowInfo}>
        <img alt="gintama" src={gintama} />
        <div className={classes.name}>
          <Typography>FullMetal Alchemist: Brotherhood</Typography>
          <div className={classes.genres} style={genreStyles}>
            <div>Action</div>
            <div>Adventure</div>
          </div>
        </div>
        <div className={classes.rating}>

          <Typography variant="subtitle1">91%</Typography>
          <Typography variant="subtitle2">201364 users</Typography>
        </div>
        <div className={classes.type}>
          <Typography variant="subtitle1">TV Show</Typography>
          <Typography variant="subtitle2">64 episodes</Typography>
        </div>
        <div className={classes.year}>
          <Typography variant="subtitle1">Spring 2009</Typography>
          <Typography variant="subtitle2">Finished</Typography>
        </div>
      </div>
    </div>
  );
};

export default RowEntry;