import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import state from "./Redux/state";
import App from './App';
import { addPost, updateNewPostText, subscribe} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                state={state}/>
        </React.StrictMode>);
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);