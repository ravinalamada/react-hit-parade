import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { Context } from '../Context';


function Lyrics() {
  const {id} = useParams();
  const { songs } = useContext(Context);
  // Find song id that I am going to display
  const findId = songs.find(song => song.id === id);

  return (
    <>
      { <div>
          <h2 className="songName">{findId.singerName}: {findId.title}</h2>
          <div className="container">
            <h2 style={{color: '#ff8906'}}>Lyrics:</h2>
            <p className="lyrics">{findId.lyrics}</p>
          </div>
        </div>
       }
    </>
  )
}

export default Lyrics
