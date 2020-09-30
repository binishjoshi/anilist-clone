import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import gintoki from '../../img/gintoki.jpg';
import gintoki_va from '../../img/gintoki_va.png';
import { useStyles } from './styles';

const CharacterCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.characterCard}>
      <Link>
        <div className={classes.character}>
          <img alt="gintoki" src={gintoki} />
          <div className={classes.characterText}>
            <Typography variant="body2">Sakata Gintoki</Typography>
            <Typography variant="body2">Main</Typography>
          </div>
        </div>
      </Link>
      <Link>
        <div className={classes.voice}>
          <div className={classes.voiceText}>
            <Typography variant="body2">Tomakazu Sugita</Typography>
            <Typography variant="body2">Main</Typography>
          </div>
          <img alt="gintoki_va" src={gintoki_va} />
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;