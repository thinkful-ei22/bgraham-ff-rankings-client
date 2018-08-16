import {playersReducer} from './players';
import {fetchPlayersRequest, fetchPlayersSuccess, fetchPlayersError} from '../actions/players';


describe('playerReducer' , () => {

const players = 
[
    {Name: 'Fake Player 1'},
    {Name: 'Fake Player 2'},
    {Name: 'Fake Player 3'}
]

const error = 'Players not found';

    it('Should set the initial state when nothing is passed in', () => {
        const state = playersReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            players: [],
            loading: false,
            error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = playersReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('fetchPlayerRequest', () => {
        it('Should request a list of players and set loading to true', () => {
            let state;
            state = playersReducer(state, fetchPlayersRequest());
            expect(state).toEqual({
                loading: true,
                error: null,
                players: []
            });
        });
    });

    describe('fetchPlayerSuccess', () => {
        it('Should set loading to false and return an array of players ', () => {
            let state;
            state = playersReducer(state, fetchPlayersSuccess(players));
            expect(state).toEqual({
                loading: false,
                error: null,
                players: players
            });
        });
    });

    describe('fetchPlayerError', () => {
        it('Should set loading to false and return an error message ', () => {
            let state;
            state = playersReducer(state, fetchPlayersError(error));
            expect(state).toEqual({
                loading: false,
                error: error,
                players: []
            });
        });
    });
})