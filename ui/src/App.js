import React from 'react';
import './App.css';
import { Store } from './Store';
import ErrorDisplay from './components/errorDisplay';
import Leaderboard from './components/leaderboard';
import AddPlayer from './components/addPlayer';
import Button from './components/button';
import { togglePlayerForm } from "./actions";


export default () => {
  const { state, dispatch } = React.useContext(Store);
  return (<div className='App'>
    { state.error && <ErrorDisplay>{ state.error.message }</ErrorDisplay> }
    <h1>Leaderboard</h1>
    <Leaderboard/>
    <div className='addPlayer'>
      <AddPlayer dispatch={ dispatch }/>
      <Button action={
        () => togglePlayerForm(dispatch, state.playerFormVisible)
      }>Add Player</Button>
    </div>
  </div>);
}
