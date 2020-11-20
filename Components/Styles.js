import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../useSongs';

function Styles() {
  const {songs} = useContext(Context);

  return (
    <ul>
       {
         songs.map(song => (
           <li key={song.id}>
             <img src="" alt="headPhones"/>
             <Link to={`/Styles/${song.id}`}><h2>{song.title}</h2></Link>
          </li>
         ))
       }
    </ul>
  )
}

export default Styles
