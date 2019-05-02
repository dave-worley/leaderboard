import React from 'react';
import { Store } from '../../Store';
import { togglePlayerForm } from '../../actions';
import PlayerForm from '../playerForm';
import './style.css';

export default () => {
  const { state, dispatch } = React.useContext(Store);
  let player;
  if (state && state.editPlayerId) {
    player = state.players.find((p) => p.id === state.editPlayerId);
  }
  return (
    state && state.playerFormVisible &&
    <div
      className='modal'
      onKeyPress={ (evt) => {
        if (evt.keyCode === 27) {
          togglePlayerForm(dispatch, state.playerFormVisible);
        }
      } }>
      <PlayerForm player={ player } />
    </div>
  );
}
