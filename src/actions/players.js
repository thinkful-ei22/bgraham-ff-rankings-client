import { API_BASE_URL } from '../config';

export const fetchPlayers = (category, position) => dispatch =>
{
  dispatch(fetchPlayersRequest());

    const serverURL = `${API_BASE_URL}/${category}/${position}`;
  return(
      
        fetch (`${serverURL}`, {
             method: 'GET'

        })
        .then(res => {
            if (!res.ok) {
              return Promise.reject('Unable to reach server');
            }
        return res.json();
        })
        .then(data => {
            // console.log(data);
            dispatch(fetchPlayersSuccess(data))
        })
        .catch(err => fetchPlayersError(err))
        
    )
    
    
}


export const FETCH_PLAYERS_REQUEST = 'FETCH_PLAYERS_REQUEST';
export const fetchPlayersRequest = () => ({
    type: FETCH_PLAYERS_REQUEST,
});

export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const fetchPlayersSuccess = (players) => ({
    type: FETCH_PLAYERS_SUCCESS,
    players
});

export const FETCH_PLAYERS_ERROR = 'FETCH_PLAYERS_ERROR';
export const fetchPlayersError = (error) => ({
    type: FETCH_PLAYERS_ERROR,
    error,
});