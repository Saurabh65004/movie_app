import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './reducers';
import App from './components/App';

// const logger=function(obj){
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE', action.type);
//     }
//   }
// }
// logger points to a middleware function which recieves an object by redux having dispatch and getState.

// const logger=function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);        //we need to pass next as otherwise our app will be stuck,
//     }
//   }
// }

//Alternate way of writing middleware.

const logger=({dispatch, getState})=>(next)=>(action)=>{
  if(typeof action !== "function"){
    console.log("ACTION TYPE: ", action.type);
  }
  next(action);
}

const thunk=({dispatch, getState})=>(next)=>(action)=>{
  if(typeof action === "function"){
    action(dispatch); 
    //if our action is a function we pass dispatch to it to dispatch that action.
    return;
  }
  //if not, pass the action forward.
  next(action);
}

const store=createStore(rootReducer, applyMiddleware(logger, thunk));
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
//Action Creator -> Action ->  dispatch ->  MiddleWare1 -> Middlware 2 -> MiddleWare N
// -> dispatch -> Reducers -> Store.
//next() will refer to another middleware as curried, and in case no middleware is there it will 
// next() will refer to dispatch.
// we need to call next() in every middleware.

We get thunk package by redux-thunk  with same code. 
*/

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