import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import playersReducer from './reducers/players';


export default createStore(playersReducer, applyMiddleware(thunk));