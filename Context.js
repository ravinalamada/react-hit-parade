import React, {useState, useEffect} from 'react';
import SongsData from './SongsData';
const Context = React.createContext();

function UseContextProvider(props) {
 const [ songs, setSongs ] = useState(SongsData);
 const [cardItems, setCardItems ] = useState([]);

 function storedSong() {
  const lsAllSongs = JSON.parse(localStorage.getItem('songs'));

  if(lsAllSongs) {
    setSongs(lsAllSongs);
  }else {
    setSongs(songs);
  }
 }

 useEffect(() => {
  storedSong();
  initialCartItems();
}, []);

function initialCartItems() {
  const lsCartItems = JSON.parse(localStorage.getItem('cardItems'));
  if(lsCartItems) {
    setCardItems(lsCartItems)
  }
}

useEffect(() => {
  if(songs.length > 0) {
    localStorage.setItem('songs', JSON.stringify(songs))
  }
}, [songs])

useEffect(() => {
    localStorage.setItem('cardItems', JSON.stringify(cardItems));
}, [cardItems])


 function toggleFavorite(id) {
  const newSongssArr = songs.map(song => {
    if (song.id === id) {
      // update this element
      return {
        ...song,
        isFavorite: !song.isFavorite,
      }
    }

    return {...song};
  });
  setSongs(newSongssArr);
}

function HandleCartItems(song) {

  // this function will toggle the cart icon
  toggleFavorite();
  // add an element to an array,
  setCardItems(prevItem => [...prevItem, song]);
}

function removeItem(id) {
  setCardItems(prevItem => prevItem.filter(item => item.id !== id));
}

function placeHolderBtn() {
  setCardItems([]);
}


 return (
    <Context.Provider value={{
                              songs,
                              cardItems,
                              setSongs,
                              toggleFavorite,
                              HandleCartItems,
                              removeItem,
                              placeHolderBtn
                            }}>
      {props.children}
    </Context.Provider>
  )
}

export {UseContextProvider, Context};

