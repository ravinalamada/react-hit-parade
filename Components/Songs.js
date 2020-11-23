import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../Context';
import useSongs from '../useSongs';

function Songs({ song }) {

  const {toggleFavorite, HandleCartItems, cardItems, removeItem} = useContext(Context);
  const {handleUpvotes, handleDownVotes} = useSongs();

  function favoriteIcon() {
    if(song.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() =>removeItem(song.id)}></i>
    }else{
     return <i className="ri-heart-line favorite" onClick={() =>toggleFavorite(song.id)}></i>
    }
  }

  function showCartItem() {
    const isAlreadyINCart = cardItems.some(item =>item.id === song.id)

    if(isAlreadyINCart) {
      return <i className="ri-shopping-cart-fill" onClick={() => removeItem(song.id)}></i>
    } else {
      return <i className="ri-shopping-cart-line ri-fw ri-1x cart" onClick={() => HandleCartItems(song)}></i>
    }
  }

  return (
    <article className="article">
      <section className="section" >
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
        {showCartItem()}
      <Link to={`/${song.id}`} className="link--more"><span className="more">...</span></Link>
      </div>
      </section>
  </article>
  )
}

export default Songs
