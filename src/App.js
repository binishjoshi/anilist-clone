import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import SearchAnime from './pages/SearchAnime';
import SearchManga from './pages/SearchManga';
import Anime from './pages/Anime';
import Manga from './pages/Manga';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search/anime' component={SearchAnime} />
          <Route exact path='/search/manga' component={SearchManga} />
          <Route exact path='/anime' component={Anime} />
          <Route exact path='/manga' component={Manga} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
