import { fetchPlayersRequest, FETCH_PLAYERS_REQUEST, fetchPlayersSuccess, FETCH_PLAYERS_SUCCESS, fetchPlayersError, FETCH_PLAYERS_ERROR} from './players';


describe('fetchPlayersRequest', () => {
    it ('Should return the action', () => {
        const action = fetchPlayersRequest();

        expect(action.type).toEqual(FETCH_PLAYERS_REQUEST);
        
    });
});


describe('fetchPlayersSuccess', () => {
    it ('Should return the action', () => {

        const players = [{Name: 'FakePlayer1'}, {Name: 'FakePlayer2'}];
        const action = fetchPlayersSuccess(players);

        expect(action.type).toEqual(FETCH_PLAYERS_SUCCESS);
        expect(action.players).toEqual(players);
        
    });
});

describe('fetchPlayersError', () => {
    it ('Should return the action', () => {

        const error = [];
        const action = fetchPlayersError(error);

        expect(action.type).toEqual(FETCH_PLAYERS_ERROR);
        expect(action.error).toEqual(error);
        
    });
});