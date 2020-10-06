import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

import { rowStyles, genreStyles } from './styles';
import gintama from '../../img/gintama.png';
import { Typography } from '@material-ui/core';

const RowEntry = ({ anime, rank, isLoading }) => {
  const classes = rowStyles();

  const lower = (value) => {
    value = value.toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  const load = () => {
    if (isLoading) {
      return (
        <div className={classes.rowInfo}>
          <Skeleton animation="wave" />
        </div>
      )
    } else {
      return (
        <div className={classes.rowInfo}>
          <img alt="gintama" src={gintama} />
          <div className={classes.name}>
            <Link to={`/anime/${anime.id}`}><Typography>{anime.title.romaji}</Typography></Link>
            <div className={classes.genres} style={genreStyles}>
              {
                anime.genres.map(genre => <div key={uniqid()}>{genre}</div>)
              }
            </div>
          </div>
          <div className={classes.moreInfo}>
            <Typography variant="subtitle1">{anime.averageScore}%</Typography>
            <Typography variant="subtitle2">{anime.popularity} users</Typography>
          </div>
          <div className={classes.moreInfo}>
            <Typography variant="subtitle1">{anime.format}</Typography>
            <Typography variant="subtitle2">{anime.episodes} episodes</Typography>
          </div>
          <div className={classes.moreInfo}>
            <Typography variant="subtitle1">{lower(anime.season)} {anime.seasonYear}</Typography>
            <Typography variant="subtitle2">{lower(anime.status)}</Typography>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={classes.rowContainer}>
      <div className={classes.rank}>
        <Typography variant="h5">#{rank}</Typography>
      </div>
      {
        load()
      }
    </div>
  );
};

export default RowEntry;