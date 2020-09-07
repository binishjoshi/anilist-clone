import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Header from './components/Header/Header';
import Home from './pages/Home';
import SearchAnime from './pages/SearchAnime';
import SearchManga from './pages/SearchManga';
import Anime from './pages/Anime';
import Manga from './pages/Manga';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer/Footer';

import { darkTheme } from './appStyles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Paper style={{height: '100vh'}}>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/anime' component={SearchAnime} />
            <Route exact path='/search/manga' component={SearchManga} />
            <Route exact path='/anime' component={Anime} />
            <Route exact path='/manga' component={Manga} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
        <Footer />
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
