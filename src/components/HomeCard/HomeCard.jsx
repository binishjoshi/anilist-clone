import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Typography } from '@material-ui/core';
import Button from '../JoinButton/JoinButton';

import Discover from '../../svg/discover.svg';
import Bring from '../../svg/bring.svg';
import Join from '../../svg/join.svg';
import Tweak from '../../svg/tweak.svg';
import { useStyles, gridStyleLeft, gridStyleRight } from './styles';

export default function HomeCard() {
  const classes = useStyles();

  return (
    <div className={classes.homeCard}>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={3}>

            <Grid item xs={12} className={classes.gridHeading}>
              <Typography variant="h4" className={classes.topTitle}>The next-generation anime platform</Typography>
              <Typography variant="body1" className={classes.topSubTitle}>Track, share, and discover your favorite <br />anime and manga with AniList</Typography>
            </Grid>

            <Grid item xs={6} style={gridStyleLeft}>
              <img className={classes.svg} src={Discover} alt="discover" />
              <div>
                <Typography variant="h6">Discover your obsessions</Typography>
                <Typography variant="body2">What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.</Typography>
              </div>
            </Grid>

            <Grid item xs={6} style={gridStyleRight}>
              <img className={classes.svg} src={Bring} alt="Bring" />
              <div>
                <Typography variant="h6">Bring Anilist anywhere</Typography>
                <Typography variant="body2">Keep track of your progress on-the-go with one of the many AniList apps across iOS, Android, macOS and Windows.</Typography>
              </div>
            </Grid>

            <Grid item xs={6} style={gridStyleLeft}>
              <img className={classes.svg} src={Join} alt="Join" />
              <div>
                <Typography variant="h6">Join the conversation</Typography>
                <Typography variant="body2">Share thoughts with our thriving community, make friends, socialize and revieve recommendations.</Typography>
              </div>
            </Grid>

            <Grid item xs={6} style={gridStyleRight}>
              <img className={classes.svg} src={Tweak} alt="Tweak" />
              <div>
                <Typography variant="h6">Tweak it to your liking</Typography>
                <Typography variant="body2">Customize your scoring system, title format, color scheme, and much more!. Also, we have a dark mode.</Typography>
              </div>
            </Grid>

          </Grid>
        </CardContent>
        <Button className={classes.button} />
      </Card>
    </div>
  );
};
