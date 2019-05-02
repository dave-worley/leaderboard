import React from 'react';
import { togglePlayerForm, addPlayer, reportError } from "../../actions";
import { Store } from "../../Store";

export default ({ player }) => {
  const { state, dispatch } = React.useContext(Store);
  let playerData = player ? player : {
    firstName: '',
    lastName: '',
    score: 0
  };
  const handleChange = (evt) => {
    playerData = {
      ...playerData,
      [evt.target.name]: evt.target.value
    };
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (playerData.firstName && playerData.lastName) {
      addPlayer(dispatch, playerData);
    } else {
      reportError(dispatch, new Error('The player needs a first & last name.'))
    }
    togglePlayerForm(dispatch, state.playerFormVisible);
  };
  return (
    <form className='modalContent' onSubmit={ handleSubmit } onChange={ handleChange }>
      <span onClick={ () => togglePlayerForm(dispatch, state.playerFormVisible) } className='close'/>
      <label htmlFor=''>First Name</label><input name='firstName' type='text' defaultValue={ playerData.firstName }/>
      <label htmlFor=''>Last Name</label><input name='lastName' type='text' defaultValue={ playerData.lastName }/>
      <label htmlFor=''>Score</label><input name='score' type='text' defaultValue={ playerData.score }/>
      <button>Add Player</button>
    </form>
  );
};