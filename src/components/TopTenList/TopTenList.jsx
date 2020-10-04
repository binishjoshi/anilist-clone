import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { getTop } from '../../actions/top';
import RowEntry from './RowEntry';
import { useStyles } from './styles';

const TopTenList = ({ getTop, top }) => {
  const classes = useStyles();

  useEffect(() => {
    getTop('ANIME', 10);
  }, [getTop])

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

const mapStateToProps = (state) => {
  return {
    top: state
  }
}

export default connect(mapStateToProps, { getTop })(TopTenList);