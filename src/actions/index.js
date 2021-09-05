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
export const ADD_FAVOURITES='ADD_FAVOURITES';
export const REVOVE_FAVOURITES='REMOVE_FAVOURITES';

//Action Creators
export function addMovies(movies){
    return {
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

export function addFavourites(movie){
    return {
        type: ADD_FAVOURITES,
        movie,
    }
}

export function removeFavourites(movie){
    return {
        type: REVOVE_FAVOURITES,
        movie
    }
}

// Actions are just javascript objects, used to express an intent to change the state.

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