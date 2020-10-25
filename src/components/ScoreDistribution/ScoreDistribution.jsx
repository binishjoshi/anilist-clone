import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import Skeleton from '@material-ui/lab/Skeleton';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

const ScoreDistribution = ({ infoState }) => {
  const classes = useStyles();

  if (typeof (infoState) !== "undefined") {
    let scores = infoState.stats.scoreDistribution;
    if (scores !== null) {
      return (
        <div className={classes.scoreContainer}>
          <Typography variant="subtitle2">Score Distribution</Typography>
          <div className={classes.chartContainer}>
            {
              scores.map(score => (
                <div className={classes.barContainer} key={uniqid()} >
                  <div className={classes.alignContainer} >
                    <Typography variant="body2">{score.amount}</Typography>
                    <div className={classes.bar}></div>
                    <Typography variant="body2">{score.score}</Typography>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      );
    }
    return (null);
  } else {
    return (
      <Skeleton animation="wave" />
    )
  }
};

const mapStateToProps = (state) => ({
  infoState: state.infoState.infoList.Media
});

export default connect(mapStateToProps)(ScoreDistribution);