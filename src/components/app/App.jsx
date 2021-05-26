import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Album from '../../containers/Album/Album'
import Artist from '../../containers/Artist/Artist'
import Lyrics from '../../containers/Lyrics/Lyrics'
import Search from '../../containers/Search/Search';
import Header from '../header/Header'
export default function App() {
  return(
  <>
    <Header />
    <Switch>
        <Route exact path='/' component={Search}/>
        <Route exact path='/:artist' component={Artist}/>
        <Route exact path='/:artist/:album' component={Album}/>
        <Route exact path='/:artist/:album:/:song' component={Lyrics}/>
    </Switch>
  </>
  ) 
}
