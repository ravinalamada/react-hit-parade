import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Styles() {
  const {songs} = useContext(Context);
  console.log(songs);

  return (
    <ul className="list">
       {
         songs.map(song => (
           <li key={song.id} className="nav__items items--styles">
             <Link to={`/Styles/${song.style}`} className="nav__link"><h2>🎧 {song.style}</h2></Link>
          </li>
         ))
       }
    </ul>
  )
}

export default Styles
