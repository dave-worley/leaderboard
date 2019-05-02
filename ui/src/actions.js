export const addPlayer = (dispatch, player) => {
  return dispatch({
    type: 'ADD_PLAYER',
    payload: player
  });
};

export const removePlayer = (dispatch, player) => {
  return dispatch({
    type: 'REMOVE_PLAYER',
    payload: player
  });
};

export const setPlayerId = (dispatch, playerId) => {
  return dispatch({
    type: 'SET_PLAYER_ID',
    payload: playerId
  });
};

export const updateScore = (dispatch, player) => {
  return dispatch({
    type: 'UPDATE_SCORE',
    payload: player
  });
};

export const togglePlayerForm = (dispatch, isVisible) => {
  return dispatch({
    type: 'TOGGLE_PLAYER_FORM',
    payload: !isVisible
  });
};

export const storeState = (dispatch) => {
  return dispatch({
    type: 'STORE_STATE',
    payload: null
  });
};

export const reportError = (dispatch, error) => {
  return dispatch({
    type: 'ERROR',
    payload: error
  });
};
