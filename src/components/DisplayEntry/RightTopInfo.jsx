import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

const RightTopInfo = () => {
  const classes = useStyles();
  return (
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
  );
};

export default RightTopInfo;