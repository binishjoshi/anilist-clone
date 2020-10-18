import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import FavoriteIcon from '@material-ui/icons/Favorite';

import { getInfo } from '../../actions/info';

import { useStyles } from './styles';
import gintamaBanner from '../../img/gintama-banner.jpg';
import gintama from '../../img/gintama.png';
import { Typography } from '@material-ui/core';

import { relations } from './data';
import CharacterCard from '../CharacterCard/CharacterCard';
import StaffCard from '../StaffCard/StaffCard';
import RightTopInfo from './RightTopInfo';
import LeftOverview from './LeftOverview';
import StatusDistribution from '../StatusDistribution/StatusDistrubution';
import ScoreDistribution from '../ScoreDistribution/ScoreDistribution';

const DisplayEntry = ({ id, getInfo, info }) => {
  const classes = useStyles();

  const renderCharacters = () => {
    let characters = {};

    if (typeof (info) != "undefined") {
      characters = info.characters.edges;
      console.log(characters);
      let mainChara = [];
      let tempChara = [...characters];

      for (let i = 0; i < tempChara.length; i++) {
        let role = tempChara[i].role;
        if (role === 'MAIN') {
          console.log('Main chara found');
          mainChara.push(tempChara[i]);
          tempChara.splice(i, 1);
        }
      }

      console.log('Main Chara');
      console.log(mainChara);
      let newChara = [...mainChara, ...tempChara];
      console.log(newChara);

      return newChara.slice(0, 6).map(character => {
        return (
          <CharacterCard key={uniqid()} characterInfo={character} />
        )
      });
    } else {
      return (<CharacterCard loading={true} />)
    }
  }

  const renderStaff = () => {
    let staff = {};

    if (typeof (info) != "undefined") {
      staff = info.staff.nodes;

      return staff.slice(0, 6).map(s => {
        return (
          <StaffCard key={uniqid()} staffInfo={s} />
        );
      });
    } else {
      return (<StaffCard />)
    }
  };

  useEffect(() => {
    getInfo(id);
  }, [getInfo, id]);

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
        <LeftOverview info={info} />
        <div className={classes.rightOverview}>
          <div className={classes.relations}>
            <Typography variant="subtitle1">Relations</Typography>
            <div className={classes.relationContainer}>
              {
                relations.map(relation => (
                  <Link className={classes.relation} key={uniqid()} to="/anime/id" >
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
              {
                renderCharacters()
              }
            </div>
          </div>
          <div className={classes.staff}>
            <Typography variant="subtitle1">Staff</Typography>
            <div className={classes.staffContainer}>
              {
                renderStaff()
              }
            </div>
          </div>
          <div className={classes.chartsContainer}>
            <StatusDistribution />
            <ScoreDistribution />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state.infoState.infoList.Media
});

export default connect(mapStateToProps, { getInfo })(DisplayEntry);