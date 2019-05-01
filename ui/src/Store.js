import React from 'react';

export const Store = React.createContext({});

const STATENAME = 'LeaderboardInitialState';

if (!localStorage.getItem(STATENAME)) {
  localStorage.setItem(STATENAME, {
    players: [],
    editPlayerId: '',
    addPlayerFormVisible: false,
    error: null
  });
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return { ...state, players: state.players.concat(action.payload) };
    case 'REMOVE_PLAYER':
      return { ...state, players: state.players.filter((player) => {
          return action.payload.id !== player.id;
        }) };
    case 'SET_PLAYER_ID':
      return { ...state, editPlayerId: action.payload };
    case 'UPDATE_SCORE':
      return {
        ...state,
        players: state.players.map((player) => {
          if (player.id === action.payload.id) {
            player.score = action.payload.score;
          }
          return player;
        })
      };
    case 'TOGGLE_PLAYER_FORM':
      return {
        ...state,
        addPlayerFormVisible: action.payload
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'STORE_STATE':
      localStorage.setItem(STATENAME, state);
      return state;
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, localStorage.getItem(STATENAME));
  const value = { state, dispatch };
  return (<Store.Provider value={ value }>
    {props.children}
  </Store.Provider>);
}
