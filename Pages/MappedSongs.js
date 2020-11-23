import React, {useContext} from 'react';
import { Context } from '../Context';
import Songs from '../Components/Songs';

function MappedSongs() {
  const { songs } = useContext(Context);

  const sortedSongs = songs.sort((songa, songb) => {
    const songUpvotes = songa.upVotes - songa.downVotes;
    const songDownVotes = songb.upVotes - songb.downVotes;
    return songDownVotes - songUpvotes;
  });

  return (
    <div>
      {sortedSongs.map(song => {
        console.log(song , 'This is sosn');
        return <Songs key={song.id} song={song} />
      })}
    </div>
    )
  }
  export default MappedSongs;
