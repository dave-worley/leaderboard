import React from 'react';
import { uniqid } from "./helpers";

export const Store = React.createContext({});

const STATENAME = 'LeaderboardInitialState';

if (!localStorage.getItem(STATENAME)) {
  localStorage.setItem(STATENAME, JSON.stringify({
    players: [
      {
        lastName: 'Worley',
        firstName: 'David',
        score: 100,
        id: uniqid()
      },
      {
        lastName: 'Worley',
        firstName: 'David',
        score: 100,
        id: uniqid()
      },
      {
        lastName: 'Worley',
        firstName: 'David',
        score: 100,
        id: uniqid()
      }
    ],
    editPlayerId: '',
    playerFormVisible: false,
    error: null
  }));
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PLAYER':
      return { ...state, players: state.players.concat(Object.assign(action.payload, { id: uniqid() })) };
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
        playerFormVisible: action.payload,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'STORE_STATE':
      localStorage.setItem(STATENAME, JSON.stringify(state));
      return state;
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const initialState = Object.assign(JSON.parse(localStorage.getItem(STATENAME)), { playerFormVisible: false });
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (<Store.Provider value={ value }>
    {props.children}
  </Store.Provider>);
}
