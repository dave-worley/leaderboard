import React from 'react';
import './App.css';
import { Store } from './Store';
import ErrorDisplay from './components/errorDisplay';
import Leaderboard from './components/leaderboard';
import AddEditPlayer from './components/addEditPlayer';
import Button from './components/button';
import { setPlayerId, togglePlayerForm } from "./actions";


export default () => {
  const { state, dispatch } = React.useContext(Store);
  return (<div className='App'>
    { state.error && <ErrorDisplay>{ state.error.message }</ErrorDisplay> }
    <h1>Leaderboard</h1>
    <Leaderboard/>
    <div className='addPlayer'>
      <AddEditPlayer />
      <Button action={
        () => {
          setPlayerId(dispatch, null);
          togglePlayerForm(dispatch, state.playerFormVisible);
        }
      }>Add Player</Button>
    </div>
  </div>);
}
