import {search} from '../playerSearch';

export const SEARCH_PLAYERS_REQUEST = 'SEARCH_PLAYERS_REQUEST';
export const searchPlayersRequest = () => ({
    type: SEARCH_PLAYERS_REQUEST
});

export const SEARCH_PLAYERS_SUCCESS = 'SEARCH_PLAYERS_SUCCESS';
export const searchPlayersSuccess = searchedPlayers => ({
    type: SEARCH_PLAYERS_SUCCESS,
    searchedPlayers
});

export const SEARCH_PLAYERS_ERROR = 'SEARCH_PLAYERS_ERROR';
export const searchPlayersError = error => ({
    type: SEARCH_PLAYERS_ERROR,
    error
});

export const searchPlayers = (category, position, name) => dispatch => {
    dispatch(searchPlayersRequest());
    search(category, position, name)
        .then(players => {
          console.log('players: ', players)
            dispatch(searchPlayersSuccess(players))
        })
        .catch(error => dispatch(searchPlayersError(error)));
};


