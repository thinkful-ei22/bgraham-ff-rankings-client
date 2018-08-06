import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PlayerList from './components/players-list';
import {Provider} from 'react-redux';
import store from './store';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
<Provider store={store}>
<PlayerList />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
