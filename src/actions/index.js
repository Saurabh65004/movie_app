// {
//     type: 'INCREASE_COUNT', 
// }

// {
//     type: 'DECREASE_COUNT',
// }

//Action Types
export const SHOW_FAVOURITES='SHOW_FAVOURITES';
export const SHOW_MOVIES='SHOW_MOVIES';
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_TO_FAVOURITES='ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';   
export const ADD_MOVIE_TO_LIST="ADD_MOVIE_TO_LIST";
export const HANDLE_MOVIE_SEARCH="HANDLE_MOVIE_SEARCH";
//Action Creators
export function addMovies(movies){
    return {
        // we run this initially to add movies to our state.
        type: ADD_MOVIES,
        movies
    }
}

export function showfavourites(){
    return {
        type: SHOW_FAVOURITES,
    }
}

export function showMovies(){
    return {
        type:SHOW_MOVIES,
    }
}

export function addToFavourites(movie){
    return {
        type: ADD_TO_FAVOURITES,
        movie,
    }
}

export function removeFromFavourites(movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function addMovieToList(movie){
    return {
        type: ADD_MOVIE_TO_LIST,
        movie,
    }
}

export function handleMovieSearch(movie){
    //Get our data from API.
    const url=`https://www.omdbapi.com/?apikey=bd5622fe&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())     //to return response as json.
        .then((movie)=>{
            console.log(movie);
            //We recieved our data so we can dispatch,
        });
    }
}
// Actions are just javascript objects, used to express an intent to change the state.
//Action creators are generally synchronous and not async and return a object.

//Our Action Creators generally return an Object but in case it returns a function we can check in middleware, 
//and if we pass a function  we pass dispatch to it.
//Our middleware will be thunk as thunk is speacial type of function which is returned by a function.
//If we don't have access of dispatch in a function, we can wrap the portion around a function passing dispatch.
/*

Error: Actions must be plain objects. Instead, the actual type was: 'undefined'.
 You may need to add middleware to your store setup to handle dispatching other values,
  such as 'redux-thunk' to handle dispatching functions.
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