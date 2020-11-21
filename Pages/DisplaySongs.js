import React, {useContext} from 'react';
import { Context } from '../Context';
import Songs from '../Components/Songs';

function DisplaySongs() {
  const {songs} = useContext(Context);
  console.log(songs,"F");
  return (
    <div>
    {songs.map(song => {
      <Songs key={song.id} song={song} />
    })}
    </div>
    )
  }
  export default DisplaySongs;
