import React from 'react';

import { useStyles } from './styles';
import { Button } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.container}>
        <div className={classes.themeSelector}>
          Theme Selector
          <div className={classes.themeButtons}>
            <Button variant="contained">Dark</Button>
            <Button vairant="contained" disabled>Light</Button>
          </div>
        </div>
        <div className={classes.linkContainer}>
          <div>
            <span>AniList.co</span>
            <span>AniChart.net</span>
          </div>
          <div>
            <span>Apps</span>
            <span>SiteStats</span>
            <span>Recommendations</span>
            <span>API</span>
          </div>
          <div>
            <span>Discord</span>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>Github</span>
          </div>
          <div>
            <span>AddData</span>
            <span>Contact</span>
            <span>TermsPrivacy</span>
            <span>SiteMap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;