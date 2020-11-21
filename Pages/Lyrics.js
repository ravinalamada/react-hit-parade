import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { Context } from '../Context';


function Lyrics() {
  const {id} = useParams();
  const { songs } = useContext(Context);

  const findId = songs.find(song => song.id === id);
  console.log(findId);
  return (
    <div>

    </div>
  )
}

export default Lyrics
