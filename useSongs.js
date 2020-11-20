import React, {useState, useEffect} from 'react';
import SongsData from './SongsData';
const Context = React.createContext();

function UseContextProvider(props) {
 const [ songs, setSongs ] = useState(SongsData);

 return (
    <Context.Provider value={{songs}}>
      {props.children}
    </Context.Provider>
  )
}

export {UseContextProvider, Context};

