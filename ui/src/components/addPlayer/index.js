import React from 'react';
import { Store } from '../../Store';
import { togglePlayerForm } from '../../actions';
import PlayerForm from '../playerForm';
import './style.css';

export default () => {
  const { state, dispatch } = React.useContext(Store);
  return (
    state && state.playerFormVisible &&
    <div
      className='modal'
      onKeyPress={ (evt) => {
        if (evt.keyCode === 27) {
          togglePlayerForm(dispatch, state.playerFormVisible);
        }
      } }>
      <PlayerForm />
    </div>
  );
}
