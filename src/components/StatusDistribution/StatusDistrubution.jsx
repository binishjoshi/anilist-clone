import React from 'react';

import { Typography } from '@material-ui/core';

import { statusData } from './data';
import { useStyles } from './styles';

const StatusDistribution = () => {
  const classes = useStyles();
  return (
    <div className={classes.statusContainer}>
      <Typography variant="subtitle2">Status Distribution</Typography>
      <div className={classes.chartContainer}>
        <div className={classes.infoContainer}>
          {
            Object.keys(statusData).map(category => (
              <div className={classes.info}>
                <div className={classes.statusText}>
                  <Typography variant="body2">{category}</Typography>
                </div>
                <div className={classes.users}>
                  <Typography variant="body2">{statusData[category]}</Typography>
                  <Typography variant="body2">users</Typography>
                </div>
              </div>
            ))
          }
        </div>
        <div className={classes.lineChart}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
      </div>
    </div>
  );
};

export default StatusDistribution;