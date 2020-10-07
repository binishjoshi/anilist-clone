import React from 'react';

import DisplayEntry from '../components/DisplayEntry/DisplayEntry';

const DisplayAnime = ({ match }) => {
  return (
    <div>
      <DisplayEntry id={match.params.id} />
    </div>
  );
};

export default DisplayAnime;