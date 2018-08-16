import {searchReducer} from './searchReducer';
import {searchPlayersRequest, searchPlayersSuccess, searchPlayersError} from '../actions/search-players';


describe('searchReducer' , () => {

const searchedPlayers = 
[
    {Name: 'Fake Player'}
]

const error = 'Player not found';

    it('Should set the initial state when nothing is passed in', () => {
        const state = searchReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            searchedPlayers: [],
            loading: false,
            error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = searchReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('searchPlayerRequest', () => {
        it('Should request a search through a list players and set loading to true', () => {
            let state;
            state = searchReducer(state, searchPlayersRequest());
            expect(state).toEqual({
                loading: true,
                error: null,
                searchedPlayers: []
            });
        });
    });

    describe('searchPlayerSuccess', () => {
        it('Should set loading to false and return an array of searched players ', () => {
            let state;
            state = searchReducer(state, searchPlayersSuccess(searchedPlayers));
            expect(state).toEqual({
                loading: false,
                error: null,
                searchedPlayers: searchedPlayers
            });
        });
    });

    describe('searchPlayerError', () => {
        it('Should set loading to false and return an error message ', () => {
            let state;
            state = searchReducer(state, searchPlayersError(error));
            expect(state).toEqual({
                loading: false,
                error: error,
                searchedPlayers: []
            });
        });
    });
})