import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import gintoki from '../../img/gintoki.jpg';
import { useStyles } from './styles';

const StaffCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.staffCard}>
      <Link>
        <div className={classes.staff}>
          <img alt="gintoki" src={gintoki} />
          <div className={classes.staffText}>
            <Typography variant="body2">Sakata Gintoki</Typography>
            <Typography variant="body2">Main</Typography>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StaffCard;