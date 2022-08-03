import React from 'react';
import ReactDOM from 'react-dom/client';

//Redux
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from "./reducers/index.js"

import App from './App.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

    <Provider store = {store}>
    <App />
    </Provider>
  
);