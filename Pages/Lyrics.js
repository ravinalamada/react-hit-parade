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
      {  <div>
          <h2>{findId.singerName}: {findId.title}</h2>
          <p className="container">{findId.lyrics}</p>
         </div>
       }
    </>
  )
}

export default Lyrics
