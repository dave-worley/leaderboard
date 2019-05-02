import React from 'react';
import { togglePlayerForm, addPlayer, reportError, storeState, updateScore, setPlayerId } from "../../actions";
import { Store } from "../../Store";
import Button from '../button';
import './style.css';

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
      playerData.score = parseInt(playerData.score);
      if (!player) {
        addPlayer(dispatch, playerData);
      } else {
        updateScore(dispatch, playerData);
        setPlayerId(dispatch, null);
      }
      storeState(dispatch);
    } else {
      reportError(dispatch, new Error('The player needs a first & last name.'))
    }
    togglePlayerForm(dispatch, state.playerFormVisible);
  };
  return (
    <form className='modalContent' onSubmit={ handleSubmit } onChange={ handleChange }>
      <span onClick={ () => togglePlayerForm(dispatch, state.playerFormVisible) } className='close'/>
      <div className='formRow'>
        <label htmlFor=''>First Name</label>
        {
          player && <span>{ player.firstName }</span>
        }
        {
          !player && <input name='firstName' type='text' defaultValue={ playerData.firstName }/>
        }
      </div>
      <div className='formRow'>
        <label htmlFor=''>Last Name</label>
        {
          player && <span>{ player.lastName }</span>
        }
        {
          !player && <input name='lastName' type='text' readOnly={ !!player} defaultValue={ playerData.lastName }/>
        }
      </div>
      <div className='formRow'>
        <label htmlFor=''>Score</label><input name='score' type='number' min={ 0 } max={ 100 } defaultValue={ playerData.score }/>
      </div>
      <Button>{ player ? 'Update Score' : 'Add Player' }</Button>
    </form>
  );
};
