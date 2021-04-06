import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware } from 'redux';

import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer/index'


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
