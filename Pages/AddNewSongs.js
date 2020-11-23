import React from 'react';
import useSongs from '../useSongs';

function AddNewSongs() {
  const  { handleSubmit} = useSongs();

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
                >
          </input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input"
                 type="text"
                 name="singerName"
                 placeholder="Artist"
                ></input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input"
                 type="number"
                 name="price"
                 placeholder="Price"
                ></input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <select name="style" className="form__select">
            <option>Styles</option>
            <option value="kawitry">Kawitry</option>
            <option value="salegy">Salegy</option>
            <option value="slow">Slow</option>
            <option value="kilalaky">Kilalaky</option>
            <option value="rnb">Rnb</option>
            <option value="danceall">DanceAll</option>
          </select>
          </fieldset>
          <fieldset className="form__fieldset">
            <textarea placeholder="Lyrics"
                      cols="50"
                      rows="8"
                      name="lyrics"
                      className="form__textarea"
                      ></textarea>
          </fieldset>
        </div>
        <button className="form--submit">Add</button>
      </div>
    </form>
  )
}

export default AddNewSongs;
