import React from 'react';
import { Store } from "../../Store";
import { removePlayer, storeState } from "../../actions";
import Button from '../button';

export default () => {
  const { state, dispatch } = React.useContext(Store);
  const removePlayerHandler = (player) => {
    removePlayer(dispatch, player);
    storeState(dispatch);
  };
  return (
    <table>
      <tbody>
        { state.players.map((player) => {
          return (<tr key={ player.id }>
            <td>{ player.lastName }, { player.firstName }</td>
            <td>{ player.score }</td>
            <td><Button>update score</Button><Button action={ () => removePlayerHandler(player) }>delete</Button></td>
          </tr>);
        }) }
      </tbody>
    </table>
  );
};
