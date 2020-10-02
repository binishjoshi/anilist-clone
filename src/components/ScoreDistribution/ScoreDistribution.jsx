import React from 'react';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

const ScoreDistribution = () => {
  const classes = useStyles();
  return (
    <div className={classes.scoreContainer}>
      <Typography variant="subtitle2">Score Distribution</Typography>
      <div className={classes.chartContainer}>
        Chart
      </div>
    </div>
  );
};

export default ScoreDistribution;