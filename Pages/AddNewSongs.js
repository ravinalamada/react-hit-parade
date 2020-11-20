import React from 'react'

function AddNewSongs() {
  return (
    <form className="form">
      <h2 className="form__heading">Add a new song</h2>
      <div className="form--container">
        <div className="form--wrapper">
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input" type="text" placeholder="Title" name="title"></input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input" type="text" name="artist" placeholder="Artist"></input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <input className="form__input" type="text" name="price" placeholder="Price"></input>
          </fieldset>
          <fieldset className="form__fieldset">
          <label className="form__label"></label>
          <select>
            <label className="form__label"></label>
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
            <label className="form__label"></label>
            <textarea placeholder="Lyrics" cols="50" rows="4"></textarea>
          </fieldset>
        </div>
        <button className="form--submit">Add</button>
      </div>
    </form>
  )
}

export default AddNewSongs;
