import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { useStyles } from './styles';
import gintamaBanner from '../../img/gintama-banner.jpg';
import gintama from '../../img/gintama.png';
import { Typography } from '@material-ui/core';

import { fakeData, tags, relations } from './data';
import CharacterCard from '../CharacterCard/CharacterCard';
import StaffCard from '../StaffCard/StaffCard';

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
      <div className={classes.entryOverview}>
        <div className={classes.leftOverview}>
          <div className={classes.rank}>
            <Typography variant="body2">#6 Highest Rated of All Time</Typography>
          </div>
          <div className={classes.rank}>
            <Typography variant="body2">#380 Most Popular of All Time</Typography>
          </div>
          <div className={classes.info}>
            {
              Object.keys(fakeData).map(key => {
                return (
                  <Fragment>
                    <Typography variant="subtitle1">{key}</Typography>
                    <Typography variant="body2">{fakeData[key]}</Typography>
                  </Fragment>
                )
              })
            }
          </div>
          <div className={classes.tags}>
            <Typography variant="body1">Tags</Typography>
            <div className={classes.tag}>
              <Typography variant="body1">Meta</Typography>
              <Typography variant="body1">86%</Typography>
            </div>
            {
              Object.keys(tags).map(key => {
                return (
                  <div className={classes.tag}>
                    <Typography variant="body1">{key}</Typography>
                    <Typography variant="body1">{tags[key]}</Typography>
                  </div>
                )
              })
            }
          </div>
        </div>
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