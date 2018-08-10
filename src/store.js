import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import players from './reducers/players';
import search from './reducers/searchReducer';


export default createStore(
    combineReducers({players,search}) , applyMiddleware(thunk)
);