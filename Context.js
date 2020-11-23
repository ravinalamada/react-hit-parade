import React, {useState, useEffect} from 'react';
import SongsData from './SongsData';
const Context = React.createContext();

function UseContextProvider(props) {
 const [ songs, setSongs ] = useState(SongsData);
 const [cardItems, setCardItems ] = useState([]);

 // Get the state
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

// Get the new data
function initialCartItems() {
  const lsCartItems = JSON.parse(localStorage.getItem('cardItems'));
  if(lsCartItems) {
    setCardItems(lsCartItems)
  }
}

// set the state
useEffect(() => {
  if(songs.length > 0) {
    localStorage.setItem('songs', JSON.stringify(songs))
  }
}, [songs])

//set the new state
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
  // add an element into an array,
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

