import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { useStyles } from './styles';
import gintamaBanner from '../../img/gintama-banner.jpg';
import gintama from '../../img/gintama.png';
import { Typography } from '@material-ui/core';

import { relations } from './data';
import CharacterCard from '../CharacterCard/CharacterCard';
import StaffCard from '../StaffCard/StaffCard';
import RightTopInfo from './RightTopInfo';
import LeftOverview from './LeftOverview';

const DisplayEntry = () => {
  const classes = useStyles();
  return (
    <div className={classes.displayEntry}>
      <div className={classes.bannerContainer}>
        <img alt="gintama-banner" src={gintamaBanner} />
      </div>
      <div className={classes.description}>
        <div className={classes.leftInfo}>
          <img alt="gintama" src={gintama} />
          <div className={classes.buttonContainer}>
            <button>Add to List</button>
            <button><FavoriteIcon /></button>
          </div>
        </div>
        <RightTopInfo />
      </div>
      <div className={classes.entryOverview}>
        <LeftOverview />
        <div className={classes.rightOverview}>
          <div className={classes.relations}>
            <Typography variant="subtitle1">Relations</Typography>
            <div className={classes.relationContainer}>
              {
                relations.map(relation => (
                <Link className={classes.relation}>
                  <img alt="gintama" src={gintama} />
                  <div className={classes.relationText}>
                    <Typography variant="body2">{relation}</Typography>
                  </div>
                </Link>
                ))
              }
            </div>
          </div>
          <div className={classes.characters}>
            <Typography variant="subtitle1">Characters</Typography>
            <div className={classes.characterContainer}>
              <CharacterCard />
              <CharacterCard />
              <CharacterCard />
            </div>
          </div>
          <div className={classes.staff}>
            <Typography variant="subtitle1">Staff</Typography>
            <div className={classes.staffContainer}>
              <StaffCard />
              <StaffCard />
              <StaffCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayEntry;