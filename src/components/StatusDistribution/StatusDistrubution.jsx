import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { useStyles } from './styles';

const StatusDistribution = ({ infoState }) => {
  const classes = useStyles();
  if (typeof (infoState) !== "undefined") {
    let status = infoState.stats.statusDistribution;
    status.splice(3, 1);
    return (
      <div className={classes.statusContainer}>
        <Typography variant="subtitle2">Status Distribution</Typography>
        <div className={classes.chartContainer}>
          <div className={classes.infoContainer}>
            {
              status.map(category => (
                <div className={classes.info} key={uniqid()} >
                  <div className={classes.statusText}>
                    <Typography variant="body2">{category.status}</Typography>
                  </div>
                  <div className={classes.users}>
                    <Typography variant="body2">{category.amount}</Typography>
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
  } else {
    return (<Skeleton animation="wave" />)
  }
};

const mapStateToProps = (state) => ({
  infoState: state.infoState.infoList.Media
});

export default connect(mapStateToProps)(StatusDistribution);