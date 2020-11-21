import React, {useState} from 'react';
import SongsData from './SongsData';
const Context = React.createContext();

function UseContextProvider(props) {
 const [ songs, setSongs ] = useState(SongsData);
 const [cardItems, setCardItems ] = useState([])

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
  // add an element to an array,
  setCardItems(prevItem => [...prevItem, song])
  console.log(cardItems);

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

