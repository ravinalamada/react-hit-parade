import React, {useContext} from 'react';
import { Context } from '../useSongs';

function Songs() {
  const {songs} = useContext(Context);
  console.log(songs);
  return (
    <article className="article">
      {
        songs.map(song => (
          <section key={song.id}>
            <div className="wrapper--title">
              <h3>{song.title}</h3>
              <p>{song.singerName}</p>
            </div>
            <div className="wrapper">
              <span className="upVotes">{song.upVotes}</span>
              <span className="donwVotes">{song.downVotes}</span>
            </div>
            <div className="wrapper">
              <span className="add--cart"></span>
              <span className="more">...</span>
            </div>
          </section>
        ))
      }
    </article>
  )
}

export default Songs
