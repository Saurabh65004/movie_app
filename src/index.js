import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import movies from './reducers';
import App from './components/App';

const store=createStore(movies);
console.log(store);
console.log('State',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



/*
Created the state and passed our movies reducer in it.
*/


/*
Our store is just an object with these properties
{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
dispatch: ƒ dispatch(action)getState: ƒ getState()replaceReducer: ƒ replaceReducer(nextReducer)subscribe: ƒ subscribe(listener)Symbol(observable): ƒ observable()[[Prototype]]: Object

*/