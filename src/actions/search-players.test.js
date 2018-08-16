import {searchPlayersRequest, SEARCH_PLAYERS_REQUEST, searchPlayersSuccess, SEARCH_PLAYERS_SUCCESS, searchPlayersError, SEARCH_PLAYERS_ERROR} from './search-players';

describe('searchPlayersRequest', () => {
    it ('Should return the action', () => {

       
        const action = searchPlayersRequest();

        expect(action.type).toEqual(SEARCH_PLAYERS_REQUEST);
        
    });
});

describe('searchPlayersSuccess', () => {
    it ('Should return the action', () => {

       const searchedPlayers = [{Name: 'Searched Players'}]
        const action = searchPlayersSuccess(searchedPlayers);

        expect(action.type).toEqual(SEARCH_PLAYERS_SUCCESS);
        expect(action.searchedPlayers).toEqual(searchedPlayers);
        
    });
});

describe('searchPlayersError', () => {
    it ('Should return the action', () => {

       const error = []
        const action = searchPlayersError(error);

        expect(action.type).toEqual(SEARCH_PLAYERS_ERROR);
        expect(action.error).toEqual(error);
        
    });
});