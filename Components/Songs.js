import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../Context';
import useSongs from '../useSongs';
import useHover from '../useHover';


function Songs({ song }) {
  console.log(song);
  const {songs, toggleFavorite, HandleCartItems} = useContext(Context);
  const {handleUpvotes, handleDownVotes} = useSongs();
  const [ref, isHovered] = useHover();

  function favoriteIcon() {
    if(song.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() =>toggleFavorite(song.id)}></i>
    }else{
     return <i className="ri-heart-line favorite" onClick={() =>toggleFavorite(song.id)}></i>
    }
  }

  function cartIcon() {
    if(song.isFavorite) {
      return <i className="ri-shopping-cart-fill" onClick={() => HandleCartItems(song)}></i>
    }else {
      return <i className="ri-shopping-cart-2-line" onClick={() => HandleCartItems(song)}></i>
    }
  }


  return (
    <article className="article">
      <section className="section" >
      <div className="wrapper wrapper--title" ref={ref}>
        {favoriteIcon()}
      <div>
      <h3 className="section__heading">{song.title}</h3>
      <p>{song.singerName}</p></div>
      </div>
      <div className="wrapper">
      <span className="upVotes" onClick={handleUpvotes} id={song.id}>↑ {song.upVotes}</span>
      <span className="donwVotes" onClick={handleDownVotes} id={song.id}>↓ {song.downVotes}</span>
      </div>
      <div className="wrapper" ref={ref}>
        {cartIcon()}
      <Link to={`/${song.id}`} className="link--more"><span className="more">...</span></Link>
      </div>
      </section>
  </article>
  )
}

export default Songs
