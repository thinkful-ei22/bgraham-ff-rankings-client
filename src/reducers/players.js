import {
    FETCH_PLAYERS_REQUEST,
    FETCH_PLAYERS_SUCCESS,
    FETCH_PLAYERS_ERROR
  } from '../actions/players';
  
  const initialState = {
    players: [],
    loading: false,
    error: null
  };
  
  export const  playersReducer = (state = initialState, action) => {
    switch(action.type) {
    case FETCH_PLAYERS_REQUEST:
      return Object.assign({} ,state, {
        loading: true
      });
    case FETCH_PLAYERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        players: action.players
      });
    case FETCH_PLAYERS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
    }
  }