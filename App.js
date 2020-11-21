import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddNewSongs from './Pages/AddNewSongs';
import Cart from './Pages/Cart';
import Header from './Components/Header';
import Songs from './Components/Songs';
import Styles from './Components/Styles';
import SongsStyled from './Pages/songsStyled';
import Lyrics from './Pages/Lyrics';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <Songs />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/AddNewSongs">
          <AddNewSongs />
        </Route>
        <Route exact path="/Styles">
          <Styles />
        </Route>
        <Route exact path="/Styles/:songStyle">
          <SongsStyled />
        </Route>
        <Route exact path="/songsStyle/:id">
          <Lyrics />
        </Route>
      </Switch>
    </main>
  )
}

export default App
