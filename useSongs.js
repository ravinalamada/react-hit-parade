import {useState ,useContext} from 'react';
import {Context} from './Context';

function useSongs() {
  const {songs, setSongs} = useContext(Context);
  const [votes, setVotes] = useState(0);
  const [addNewSong, setAddNewSong] = useState([]);

  function handleSubmit(e){
    const form = e.currentTarget;
    console.log(form);
    e.preventDefault();
    const songObj = {
      singerName: form.singerName.value,
      title: form.title.value,
      style: form.style.value,
      lyrics: form.lyrics.value,
      upVotes: 0,
      downVotes: 0,
      isFavorite: false,
      id: Date.now(),
    }
    console.log(songObj);
    setSongs([...songs, songObj]);
    e.currentTarget.reset();
  }
  console.log(songs);


  function handleUpvotes(e) {
    const id = e.currentTarget.id;
    const findId = songs.find(song => song.id == id);
    const upVotes = findId.upVotes++;
    setVotes(upVotes);
  }

  function handleDownVotes(e) {
    const id = e.currentTarget.id;
    const findId = songs.find(song => song.id == id);
    const downVotes = findId.downVotes++;
    setVotes(downVotes);
  }



  return {addNewSong, handleSubmit, handleUpvotes, handleDownVotes}

}

export default useSongs
