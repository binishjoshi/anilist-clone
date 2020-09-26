import React from 'react';

import SearchOption from '../components/SearchOptions/SearchOptions';
import DisplayRow from '../components/DisplayRow/DisplayRow';
import TopTenList from '../components/TopTenList/TopTenList';

const style = {
  marginRight: '10%',
  marginLeft: '8%',
  marginTop: '30px',
}

const SearchAnime = () => {
  return (
    <div style={style}>
      <SearchOption />
      <DisplayRow />
      <DisplayRow />
      <DisplayRow />
      <TopTenList />
    </div>
  );
};

export default SearchAnime;