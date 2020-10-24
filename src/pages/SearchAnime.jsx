import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SearchOption from '../components/SearchOptions/SearchOptions';
import DisplayRow from '../components/DisplayRow/DisplayRow';
import TopAnimeList from '../components/TopAnimeList/TopAnimeList';

import { getTrending } from '../actions/trending';

const style = {
  marginRight: '10%',
  marginLeft: '8%',
  marginTop: '30px',
}

const SearchAnime = ({ getTrending, trending }) => {
  useEffect(() => {
    getTrending('season', 5);
    getTrending('popular', 5);
    getTrending('next', 5);
    getTrending('trending', 5);
  }, [getTrending,]);

  return (
    <div style={style}>
      <SearchOption />
      <DisplayRow type="trending" heading="Trending Now" />
      <DisplayRow type="seasonTrending" heading="Popular This Season" />
      <DisplayRow type="nextSeason" heading="Upcoming Next Season" />
      <DisplayRow type="popular" heading="All Time Popular" />
      <TopAnimeList number={10} />
    </div>
  );
};

export default connect(null, { getTrending })(SearchAnime);