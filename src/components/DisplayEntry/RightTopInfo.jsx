import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';
import Skeleton from '@material-ui/lab/Skeleton';

const RightTopInfo = ({ info }) => {
  const classes = useStyles();
  let title, description
  if (typeof (info) !== "undefined") {
    title = info.title.english;
    description = info.description;
  } else {
    title = <Skeleton animation="wave" />
    description = <Skeleton animation="wave" />
  }
  return (
    <div className={classes.rightInfo}>
      <div className={classes.textContainer}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </div>
      <div className={classes.tabContainer}>
        <Link >
          <Typography variant="body2">Overview</Typography>
        </Link>
        <Link >
          <Typography variant="body2">Watch</Typography>
        </Link>
        <Link >
          <Typography variant="body2">Characters</Typography>
        </Link>
        <Link >
          <Typography variant="body2">Staff</Typography>
        </Link>
        <Link >
          <Typography variant="body2">Reviews</Typography>
        </Link>
        <Link >
          <Typography variant="body2">Stat</Typography>
        </Link>
        <Link >
          <Typography variant="body2">Social</Typography>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.infoState.infoList.Media
})

export default connect(mapStateToProps)(RightTopInfo);