import React from 'react';

import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import RowEntry from './RowEntry';
import { useStyles } from './styles';

const TopTenList = () => {
  const classes = useStyles();
  return (
    <div className={classes.listContainer}>
      <Link className={classes.heading} to='/manga'>
        <Typography variant="h5">TOP 100 Anime</Typography>
        <Typography variant="subtitle2">View All</Typography>
      </Link>
      <RowEntry />
      <RowEntry />
      <RowEntry />
      <RowEntry />
      <RowEntry />
      <RowEntry />
      <RowEntry />
      <RowEntry />
      <RowEntry />
      <RowEntry />
      <RowEntry />
    </div>
  );
};

export default TopTenList;