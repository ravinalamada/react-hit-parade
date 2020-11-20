import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';


function songsStyled() {
  const {songId} = useParams();
  const {songs} = useContext(Context);
  const findSongId = songs.find(data => data.id == songId);
  console.log(findSongId);
  return (
    <div>
      {
        findSongId.map(song => (
        <div>
          <h2>{song.style}</h2>
          <div>
          <h3>{song.title}</h3>
          <p>{song.singerName}</p>
          </div>
        </div>
        ))
      }
    </div>
  )
}

export default songsStyled
