import { API_BASE_URL } from '../config';

export const fetchUpdatedPlayers = (category, position, id) => dispatch =>
{
  dispatch(updatePlayersRequest());

    const serverURL = `${API_BASE_URL}/${category}/${position}`;
  return(
      
        fetch (`${serverURL}/${id}`, {
             method: 'PUT',


        })
        .then(res => {
            if (!res.ok) {
              return Promise.reject('Unable to reach server');
            }
        
        return res.json();
        })
        
        .then(data => {
            // console.log(data);
            dispatch(updatePlayersSuccess(data))
        })
        .catch(err => updatePlayersError(err))
        
    )
    
    
}




export const UPDATE_PLAYERS_REQUEST = 'UPDATE_PLAYERS_REQUEST';
export const updatePlayersRequest = () => ({
    type: UPDATE_PLAYERS_REQUEST
});

export const UPDATE_PLAYERS_SUCCESS = 'UPDATE_PLAYERS_SUCCESS';
export const updatePlayersSuccess = updatedPlayers => ({
    type: UPDATE_PLAYERS_SUCCESS,
    updatedPlayers
});

export const UPDATE_PLAYERS_ERROR = 'UPDATE_PLAYERS_ERROR';
export const updatePlayersError = error => ({
    type: UPDATE_PLAYERS_ERROR,
    error
});

// export const updatePlayers = (category, position, name) => dispatch => {
//     dispatch(updatePlayersRequest());
//     search(category, position, name)
//         .then(players => {
//             dispatch(searchPlayersSuccess(players))
//         })
//         .catch(error => dispatch(searchPlayersError(error)));
// };
