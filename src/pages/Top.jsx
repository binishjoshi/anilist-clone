import React from 'react';
import TopAnimeList from '../components/TopAnimeList/TopAnimeList';

const styles = {
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '50px',
}

const Top = () => {
  return (
    <div style={styles}>
      <TopAnimeList number={50} />
    </div>
  );
};

export default Top;