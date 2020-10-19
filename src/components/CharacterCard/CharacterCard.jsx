import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { useStyles } from './styles';

const CharacterCard = ({ characterInfo, loading }) => {
  const classes = useStyles();

  const renderVA = () => {
    let imageAlt = characterInfo.voiceActors[0].name.first;
    imageAlt = imageAlt.toLowerCase() + '_picture';
    if (typeof (characterInfo.voiceActors[0]) != "undefined") {
      return (
        <Link>
          <div className={classes.voice}>
            <div className={classes.voiceText}>
              <Typography variant="body2">{characterInfo.voiceActors[0].name.last} {characterInfo.voiceActors[0].name.first}</Typography>
              <Typography variant="body2">{characterInfo.role}</Typography>
            </div>
            <img alt={imageAlt} src={characterInfo.voiceActors[0].image.medium} />
          </div>
        </Link>
      );
    }
  };

  if (typeof (characterInfo) != "undefined") {
    let imageAlt = characterInfo.node.name.first;
    imageAlt = imageAlt.toLowerCase() + '_picture';
    return (
      <div className={classes.characterCard}>
        <Link>
          <div className={classes.character}>
            <img alt={imageAlt} src={characterInfo.node.image.medium} />
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