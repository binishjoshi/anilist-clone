import React from 'react';
import { Link } from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { useStyles } from './styles';
import gintamaBanner from '../../img/gintama-banner.jpg';
import gintama from '../../img/gintama.png';
import { Typography } from '@material-ui/core';

const DisplayEntry = () => {
  const classes = useStyles();
  return (
    <div className={classes.displayEntry}>
      <div className={classes.bannerContainer}>
        <img alt="gintama-banner" src={gintamaBanner} />
      </div>
      <div className={classes.info}>
        <div className={classes.leftInfo}>
          <img alt="gintama" src={gintama} />
          <div className={classes.buttonContainer}>
            <button>Add to List</button>
            <button><FavoriteIcon /></button>
          </div>
        </div>
        <div className={classes.rightInfo}>
          <Typography variant="h5">Gintama°</Typography>
          <Typography variant="body2">Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko? Meanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the n...
          </Typography>
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
      </div>
    </div>
  );
};

export default DisplayEntry;