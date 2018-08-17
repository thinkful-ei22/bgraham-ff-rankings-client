import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {playersReducer as players} from './reducers/players';
import {searchReducer as search} from './reducers/searchReducer';


export default createStore(
    combineReducers({players,search}) , applyMiddleware(thunk)
);