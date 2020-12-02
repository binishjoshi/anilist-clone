import React from 'react';
import TopAnimeList from '../components/TopAnimeList/TopAnimeList';

const styles = {
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '50px',
}

const Top = () => {
  let path = window.location.pathname;
  let type;
  path = path.replace('/', '');
  if (path === 'trending') type = 'trending'
  else if (path === 'popular') type = 'popular'
  else if (path === 'popular-season') type = 'season'
  else if (path === 'upcoming') type = 'next'
  return (
    <div style={styles}>
      <TopAnimeList number={50} type={type} />
    </div>
  );
};

export default Top;