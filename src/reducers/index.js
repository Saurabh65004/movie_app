import { combineReducers } from "redux";

import { ADD_MOVIES, ADD_TO_FAVOURITES ,SHOW_FAVOURITES, SHOW_MOVIES, REMOVE_FROM_FAVOURITES} from "../actions";
//our state will never be undefined but in start if it is pass a default argument.

const initialMovieState={
    list: [],
    favourites: [],
    favouriteDisplay: false,  
}

export function movies(state=initialMovieState, action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies,
                favouriteDisplay: false,
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites],                    //adding new movie first and then copy all movies from prev state.
            }
        case REMOVE_FROM_FAVOURITES:
            const newFavorites=state.favourites.filter((favMovie)=> favMovie !== action.movie)
            return{
                ...state,
                favourites: newFavorites,
            }

        case SHOW_FAVOURITES:
            return {
                ...state,
                favouriteDisplay: true,
            }
        case SHOW_MOVIES:
            return {
                ...state,
                favouriteDisplay: false,
            }
        default:
            return state;
    }
}

const initialSearchState={
    result: {},
};

export function search(state=initialSearchState, action){
    return state;
}

// const initialRootState={
//     movies: initialMovieState,
//     search: initialSearchState,
// };

export default combineReducers({
    movies,
    search
});


// export default combineReducers({
//     movies: movies,
//     search: search
// });


// export default function rootReducer(state=initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action),
//     }
// }


// This root reducer is already created for us by redux and we can import it as method combineReducers.
//This function accepts an arguements which an objects, and property specified by it.
// and pass value as the reference of respective reducers.
// redux is smart enough to call respective reducers for each state.

// export default function movies(state=initialState, action){
//     if(action.type === 'ADD_MOVIES'){
//         return {
//             ...state,
//             list: action.movies,
//         }
//     }
//     return state;
// }

// export default function movies(state=[], action){
//     if(action.type === 'ADD_MOVIES'){
//         return action.movies;

//     }

//     //in case type does not match none of our if else simply return the state.
//     return state;
// }


/*
Reducers always return the new state, we don't change the prev state, but always return the new state.

var o= {a:1, b:2,c:3};
undefined
var o2={...o};
undefined
o2
{a: 1, b: 2, c: 3}
o2 === o
false
o2={...o, b:100};
{a: 1, b: 100, c: 3}
*/


/*
1] for the same input a pure function should give the same output everytime.
2] Our function should only rely on parameters provided and not on any other global variable or etc.
3] Pure functions should not perform any side-effect. e.g. we cannot perform Ajax requests, cannot manipulate the DOM, cannot change state, or access the db,
It cannot change anything outside its scope.

This test itself is a checklist. A few examples of side-effects are

Mutating your input
console.log
HTTP calls (AJAX/fetch)
Changing the filesystem (fs)
Querying the DOM

console.log is the side-effect here but, in all practicality, it won’t harm us. We’ll still get the same outputs, given the same inputs.

This, however, may cause a problem.
*/