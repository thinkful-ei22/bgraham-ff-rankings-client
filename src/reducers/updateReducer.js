import {
    UPDATE_PLAYERS_REQUEST,
    UPDATE_PLAYERS_SUCCESS,
    UPDATE_PLAYERS_ERROR
} from '../actions/update-players';

const initialState = {
    updatedPlayers: [],
    loading: false,
    error: null
};

export default function updateReducer(state=initialState, action) {
    switch (action.type) {
        case UPDATE_PLAYERS_REQUEST:
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
        case UPDATE_PLAYERS_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            error: null,
            updatedPlayers: action.updatedPlayers

        });
        case UPDATE_PLAYERS_ERROR:
        return Object.assign({}, state, {
            loading: false,
            error: action.error

        });
        default:
        return state;
    }    
}