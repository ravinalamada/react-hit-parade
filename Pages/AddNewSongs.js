import React from 'react';
import useSongs from '../useSongs';

function AddNewSongs() {
  const  {addNewSong, handleSubmit} = useSongs();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__heading">Add a new song</h2>
      <div className="form--container">
        <div className="form--wrapper">
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input"
                 type="text"
                 placeholder="Title"
                 name="title"
                //  value={addNewSong}
                //  onChange={handleAddNewSongs}
                >
          </input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input"
                 type="text"
                 name="singerName"
                 placeholder="Artist"
                //  value={addNewSong}
                //  onChange={handleAddNewSongs}
                ></input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input"
                 type="text"
                 name="price"
                 placeholder="Price"
                //  value={addNewSong}
                //  onChange={handleAddNewSongs}
                ></input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <select name="style"
          // value={addNewSong} onChange={handleAddNewSongs}
          >
            <option>Styles</option>
            <option value="kawitry">Kawitry</option>
            <option value="salegy">Salegy</option>
            <option value="slow">Slow</option>
            <option value="kilalaky">Kilalaky</option>
            <option value="rnb">Rnb</option>
            <option value="danceall">DanceAll</option>
          </select>
          </fieldset>
          <fieldset>
            <textarea placeholder="Lyrics"
                      cols="50"
                      rows="4"
                      name="lyrics"
                      // value={addNewSong}
                      // onChange={handleAddNewSongs}
                      ></textarea>
          </fieldset>
        </div>
        <button className="form--submit">Add</button>
      </div>
    </form>
  )
}

export default AddNewSongs;
