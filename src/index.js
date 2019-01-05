import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import * as serviceWorker from './utils/serviceWorker';

//Linking Redux to App
import {Provider} from 'react-redux';
import storeConfiguration from './store/configureStore';

ReactDOM.render(
    <Provider store={storeConfiguration}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();