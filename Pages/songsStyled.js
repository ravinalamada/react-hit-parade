import React, {useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import { Context } from '../Context';


function songsStyled() {
  const {songStyle} = useParams();
  const { songs } = useContext(Context);
  const filteredSongStyle = songs.filter(data => data.style == songStyle);

  return (
    <>
      <h2>🎧 {songStyle}</h2>
      {
       filteredSongStyle.map(song => (
        <div key={song.id}>
          <Link to={`/songsStyled/${song.id}`}>
            <div className="container">
            <h3>{song.title}</h3>
            <p>{song.singerName}</p>
            </div>
          </Link>
        </div>
       ))
      }
    </>
  )
}

export default songsStyled
