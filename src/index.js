import './index.css';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderDomTree = (state) => {


    root.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );

    reportWebVitals();
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

rerenderDomTree(store.getState());
store.subscribe(rerenderDomTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

