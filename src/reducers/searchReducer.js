import {
    SEARCH_PLAYERS_REQUEST,
    SEARCH_PLAYERS_SUCCESS,
    SEARCH_PLAYERS_ERROR
} from '../actions/search-players';

const initialState = {
    searchedPlayers: [],
    loading: false,
    error: null
};

export default function searchReducer(state=initialState, action) {
    switch (action.type) {
        case SEARCH_PLAYERS_REQUEST:
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
        case SEARCH_PLAYERS_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            error: null,
            searchedPlayers: action.searchedPlayers

        });
        case SEARCH_PLAYERS_ERROR:
        return Object.assign({}, state, {
            loading: false,
            error: action.error

        });
        default:
        return state;
    }    
}