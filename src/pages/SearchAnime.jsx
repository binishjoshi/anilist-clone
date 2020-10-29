import React, { useEffect } from 'react';
import uniqid from 'uniqid';
import { connect } from 'react-redux';

import SearchOption from '../components/SearchOptions/SearchOptions';
import DisplayRow from '../components/DisplayRow/DisplayRow';
import TopAnimeList from '../components/TopAnimeList/TopAnimeList';

import { getTrending } from '../actions/trending';
import { clearSearch } from '../actions/search';
import RowEntry from '../components/TopAnimeList/RowEntry';
import { Button } from '@material-ui/core';

const style = {
  marginRight: '8%',
  marginLeft: '10%',
  marginTop: '30px',
}

const SearchAnime = ({ getTrending, trending, searchData, clearSearch }) => {
  useEffect(() => {
    getTrending('season', 5);
    getTrending('popular', 5);
    getTrending('next', 5);
    getTrending('trending', 5);
  }, [getTrending,]);

  const renderBody = () => {
    if (searchData.searchingStatus === "notSearching") {
      return (
        <React.Fragment>
          <DisplayRow type="trending" heading="Trending Now" />
          <DisplayRow type="seasonTrending" heading="Popular This Season" />
          <DisplayRow type="nextSeason" heading="Upcoming Next Season" />
          <DisplayRow type="popular" heading="All Time Popular" />
          <TopAnimeList number={10} />
        </React.Fragment>
      );
    } else if (searchData.searchingStatus === "searching") {
      return (
        <RowEntry isLoading={true} />
      );
    } else if (searchData.searchingStatus === "searched") {
      const resultData = searchData.searchResults.data.Page.media;
      return (
        <React.Fragment>
          <Button color="secondary" onClick={clearSearch}>Clear Search</Button>
          {
            resultData.map(anime => {
              return (
                <React.Fragment key={uniqid()}>
                  <RowEntry anime={anime} rank="#" />
                </React.Fragment>
              )
            })
          }
        </React.Fragment>
      );
    }
  }

  return (
    <div style={style}>
      <SearchOption />
      {
        renderBody()
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchData: state.searchQuery
})

export default connect(mapStateToProps, { getTrending, clearSearch })(SearchAnime);