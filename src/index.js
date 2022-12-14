import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from "./Redux/state";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch.bind(store)}
                state={store.getState ()}/>
        </React.StrictMode>);
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);