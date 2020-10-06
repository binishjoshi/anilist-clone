import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header/Header';
import Home from './pages/Home';
import SearchAnime from './pages/SearchAnime';
import SearchManga from './pages/SearchManga';
import Anime from './pages/Anime';
import DisplayAnime from './pages/DisplayAnime';
import Manga from './pages/Manga';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Top from './pages/Top';
import Footer from './components/Footer/Footer';

import { darkTheme } from './appStyles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/anime' component={SearchAnime} />
            <Route exact path='/search/manga' component={SearchManga} />
            <Route exact path='/anime' component={Anime} />
            <Route exact path='/top50' component={Top} />
            <Route exact path='/manga' component={Manga} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/anime/:id' component={DisplayAnime} />
          </Switch>
        </div>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
