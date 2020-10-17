import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import gintoki from '../../img/gintoki.jpg';
import { useStyles } from './styles';

const StaffCard = ({ staffInfo }) => {
  const classes = useStyles();

  if (typeof (staffInfo) != "undefined") {
    return (
      <div className={classes.staffCard}>
        <Link>
          <div className={classes.staff}>
            <img alt="gintoki" src={gintoki} />
            <div className={classes.staffText}>
              <Typography variant="body2">{staffInfo.name.last} {staffInfo.name.first}</Typography>
            </div>
          </div>
        </Link>

      </div>
    );
  }

  return (
    <div className={classes.staffCard}>
      <Skeleton className={classes.loading} animation="wave" />
    </div>
  );
};

export default StaffCard;