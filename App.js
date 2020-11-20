import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddNewSongs from './Pages/AddNewSongs';
import Cart from './Pages/Cart';
import Header from './Components/Header';
import Songs from './Components/Songs';
import Styles from './Components/Styles';
import SongsStyled from './Pages/songsStyled';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <Songs />
        </Route>
        <Route path="/Styles">
          <Styles />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route exact path="/AddNewSongs">
          <AddNewSongs />
        </Route>
        <Route exact path="/songsStyled/:songId">
          <SongsStyled />
        </Route>
      </Switch>
    </main>
  )
}

export default App
