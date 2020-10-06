import React, { Fragment } from 'react';
import uniqid from 'uniqid';
import { Typography } from '@material-ui/core';

import { tags, fakeData } from './data';
import { useStyles } from './styles';

const LeftOverview = () => {
  const classes = useStyles();
  return (
    <div className={classes.leftOverview}>
      <div className={classes.rank}>
        <Typography variant="body2">#6 Highest Rated of All Time</Typography>
      </div>
      <div className={classes.rank}>
        <Typography variant="body2">#380 Most Popular of All Time</Typography>
      </div>
      <div className={classes.info}>
        {
          Object.keys(fakeData).map(key => {
            return (
              <Fragment key={uniqid()}>
                <Typography variant="subtitle1">{key}</Typography>
                <Typography variant="body2">{fakeData[key]}</Typography>
              </Fragment>
            )
          })
        }
      </div>
      <div className={classes.tags}>
        <Typography variant="body1">Tags</Typography>
        <div className={classes.tag}>
          <Typography variant="body1">Meta</Typography>
          <Typography variant="body1">86%</Typography>
        </div>
        {
          Object.keys(tags).map(key => {
            return (
              <div className={classes.tag} key={uniqid()} >
                <Typography variant="body1">{key}</Typography>
                <Typography variant="body1">{tags[key]}</Typography>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default LeftOverview;