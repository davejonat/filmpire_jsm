import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import useStyles from './styles';

import {Actors, MovieInformation, Movies, NavBar, Profile} from './';

const App = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <NavBar/>
      <main className={classes.content}>
      <div className={classes.toolbar} />  
        <switch>
        <Route excat path="/movie/:id">
            <MovieInformation/>
          </Route>
          <Route exact path="/actors/:id">
            <Actors/>
          </Route>
          <Route exact path="/">
            <Movies/>
          </Route>
          <Route path="/profile/:id">
            <Profile/>
          </Route>
        </switch>
        </main>
      </div>
);
}

export default App;