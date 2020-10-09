import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import gintoki from '../../img/gintoki.jpg';
import gintoki_va from '../../img/gintoki_va.png';
import { useStyles } from './styles';

const CharacterCard = ({ characterInfo, loading }) => {
  const classes = useStyles();

  const renderVA = () => {
    if (typeof (characterInfo.voiceActors[0]) != "undefined") {
      return (
        <Link>
          <div className={classes.voice}>
            <div className={classes.voiceText}>
              <Typography variant="body2">{characterInfo.voiceActors[0].name.last} {characterInfo.voiceActors[0].name.first}</Typography>
              <Typography variant="body2">{characterInfo.role}</Typography>
            </div>
            <img alt="gintoki_va" src={gintoki_va} />
          </div>
        </Link>
      )
    }
  }

  if (typeof (characterInfo) != "undefined") {
    return (
      <div className={classes.characterCard}>
        <Link>
          <div className={classes.character}>
            <img alt="gintoki" src={gintoki} />
            <div className={classes.characterText}>
              <Typography variant="body2">{characterInfo.node.name.last} {characterInfo.node.name.first}</Typography>
              <Typography variant="body2">{characterInfo.role}</Typography>
            </div>
          </div>
        </Link>
        {
          renderVA()
        }
      </div>
    );
  }
  return (
    <div className={classes.characterCard}>
      <Skeleton className={classes.loading} animation="wave" />
    </div>
  );
};

export default CharacterCard;