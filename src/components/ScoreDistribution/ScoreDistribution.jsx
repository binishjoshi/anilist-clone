import React from 'react';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { scoreData } from './data';

const ScoreDistribution = () => {
  const classes = useStyles();
  return (
    <div className={classes.scoreContainer}>
      <Typography variant="subtitle2">Score Distribution</Typography>
      <div className={classes.chartContainer}>
        {
          Object.keys(scoreData).map(score => (
            <div className={classes.barContainer}>
              <div className={classes.alignContainer}>
                <Typography variant="body2">{scoreData[score]}</Typography>
                <div className={classes.bar}></div>
                <Typography variant="body2">{score}</Typography>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ScoreDistribution;