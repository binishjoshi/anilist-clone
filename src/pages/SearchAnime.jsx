import React from 'react';

import SearchOption from '../components/SearchOptions/SearchOptions';

const style = {
  marginRight: '10%',
  marginLeft: '8%',
  marginTop: '30px',
}

const SearchAnime = () => {
  return (
    <div style={style}>
      <SearchOption />
    </div>
  );
};

export default SearchAnime;