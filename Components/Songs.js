import React, {useContext} from 'react';
import { Context } from '../Context';
import useSongs from '../useSongs';
import lineFavorite from '../icons/line-favorite.svg';
import filledFavorite from '../icons/filled-favorite.svg';
import filledCart from '../icons/filled-shopping-cart.svg';
import lineCart from '../icons/line-shopping-cart.svg';
import useHover from '../useHover';

function Songs() {
  const {songs, toggleFavorite, HandleCartItems} = useContext(Context);
  const {handleUpvotes, handleDownVotes, removeItem} = useSongs();
  const [ref, isHovered] = useHover();
  const sortedSongs = songs.sort((songa, songb) => {
    const songUpvotes = songa.upVotes - songa.downVotes;
    const songDownVotes = songb.upVotes - songb.downVotes;
    return songDownVotes - songUpvotes;
  })

  const mappedSongs = sortedSongs.map(song => song.isFavorite === true);
  const fingId = sortedSongs.find(song => song.isFavorite === true);
  console.log(mappedSongs,"fggfg", fingId);

  function favoriteIcon() {
    if(fingId) {
     return <img src={filledFavorite} onClick={() =>toggleFavorite(fingId)} className="favorite"/>
    }else{
      console.log('loooo')
     return <img src={lineFavorite} onClick={() =>toggleFavorite(fingId)} className="favorite"/>
    }
  }

  function cartIcon() {
    if(isHovered) {
      return filledCart
    }else {
      return lineCart
    }
  }

  return (
    <article className="article">
      {
        sortedSongs.map(song => (
          <section key={song.id} className="section" ref={ref}>
            <div className="wrapper wrapper--title">
              {favoriteIcon()}
              <div>
                <h3 className="section__heading">{song.title}</h3>
                <p>{song.singerName}</p></div>
              </div>
            <div className="wrapper">
              <span className="upVotes" onClick={handleUpvotes} id={song.id}>↑ {song.upVotes}</span>
              <span className="donwVotes" onClick={handleDownVotes} id={song.id}>↓ {song.downVotes}</span>
            </div>
            <div className="wrapper">
              <img src={cartIcon()} onClick={() => HandleCartItems(song)}/>
              <span className="more">...</span>
            </div>
          </section>
        ))
      }
    </article>
  )
}

export default Songs
