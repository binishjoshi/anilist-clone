import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

import FavoriteIcon from '@material-ui/icons/Favorite';
import CharacterCard from '../CharacterCard/CharacterCard';
import StaffCard from '../StaffCard/StaffCard';
import RightTopInfo from './RightTopInfo';
import LeftOverview from './LeftOverview';
import StatusDistribution from '../StatusDistribution/StatusDistrubution';
import ScoreDistribution from '../ScoreDistribution/ScoreDistribution';
import Skeleton from '@material-ui/lab/Skeleton';

import { getInfo } from '../../actions/info';

import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

const DisplayEntry = ({ id, getInfo, info }) => {
  const classes = useStyles();

  const renderCharacters = () => {
    let characters = {};

    if (typeof (info) != "undefined") {
      characters = info.characters.edges;
      let mainChara = [];
      let tempChara = [...characters];

      for (let i = 0; i < tempChara.length; i++) {
        let role = tempChara[i].role;
        if (role === 'MAIN') {
          mainChara.push(tempChara[i]);
          tempChara.splice(i, 1);
        }
      }

      let newChara = [...mainChara, ...tempChara];

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

  const renderRelations = () => {
    if (typeof (info) != "undefined") {
      const relations = info.relations.edges;

      return relations.map(relation => (
        <Link className={classes.relation} key={uniqid()} to={`/anime/${relation.node.id}`} >
          <img alt="gintama" src={relation.node.coverImage.medium} />
          <div className={classes.relationText}>
            <Typography variant="body2">{relation.relationType}</Typography>
          </div>
        </Link>
      ));
    } else {
      return (<Skeleton animation="wave" />)
    }
  };

  useEffect(() => {
    getInfo(id);
  }, [getInfo, id]);

  const ImageCard = ({ type }) => {
    if (typeof (info) != "undefined") {
      let imageAlt = info.title.romaji;
      imageAlt = imageAlt.toLowerCase();
      if (type === 'banner') {
        let banner = info.bannerImage;
        if (banner !== null){
          imageAlt = imageAlt + '_banner';
          return (<img alt={imageAlt} src={banner} />);
        }
        return (null);
      } else {
        let cover = info.coverImage.large;
        imageAlt = imageAlt + '_cover';
        return (<img alt={imageAlt} src={cover} />);
      }
    } else {
      return (<Skeleton animation="wave" />)
    }
  }

  return (
    <div className={classes.displayEntry}>
      <div className={classes.bannerContainer}>
        <ImageCard type='banner' />
      </div>
      <div className={classes.description}>
        <div className={classes.leftInfo}>
          <ImageCard type='cover' />
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
                renderRelations()
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