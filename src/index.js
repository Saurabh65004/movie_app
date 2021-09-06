import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import rootReducer from './reducers';
import App from './components/App';

const store=createStore(rootReducer);
// console.log(store);
// console.log('Before State',store.getState());

// store.dispatch(
//   {
//     type: 'ADD_MOVIES',
//     movies: [{name: 'Superman'}],
//   }
//  );

// console.log("After State ", store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);



/*
Created the state and passed our movies reducer in it.
We can dispatch an action to the reducer with an intent to change the state using store.dispatch().
Redux will internally pass our action to the reducer.
*/


/*
Our store is just an object with these properties
{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
dispatch: ƒ dispatch(action)getState: ƒ getState()replaceReducer: ƒ replaceReducer(nextReducer)subscribe: ƒ subscribe(listener)Symbol(observable): ƒ observable()[[Prototype]]: Object

*/