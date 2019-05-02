import React from 'react';
import { Store } from "../../Store";
import { removePlayer, storeState, togglePlayerForm, setPlayerId } from "../../actions";
import Button from '../button';
import './style.css';

export default () => {
  const { state, dispatch } = React.useContext(Store);
  const removePlayerHandler = (player) => {
    if (window.confirm('Really delete this user? This action cannot be undone.')) {
      removePlayer(dispatch, player);
      storeState(dispatch);
    }
  };
  const updateScoreHandler = (player) => {
    setPlayerId(dispatch, player.id);
    togglePlayerForm(dispatch, state.playerFormVisible);
  };
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      { state.players.sort((a, b) => {
        if (a.score === b.score) {
          const aName = `${ a.lastName }, ${ a.firstName }`;
          const bName = `${ b.lastName }, ${ b.firstName }`;
          if (aName > bName) {
            return 1;
          } else {
            return -1;
          }
        }
        if (a.score > b.score) {
          return -1;
        } else if (a.score < b.score) {
          return 1;
        }
        return 0;
      }).map((player, i) => {
        return (<tr key={ player.id } className={ i%2 === 0 ? 'stripe' : '' }>
          <td>{ player.lastName }, { player.firstName }</td>
          <td>{ player.score }</td>
          <td className='actions'>
            <Button action={ () => updateScoreHandler(player) }>update score</Button>
            <Button action={ () => removePlayerHandler(player) }>delete</Button>
          </td>
        </tr>);
      }) }
      </tbody>
    </table>
  );
};
