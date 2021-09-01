//our state will never be undefined but in start if it is pass a default argument.


export default function movies(state=[], action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }

    //in case action matches none of our if else simply return the state.
    return state;
}


/*
Reducers always return the new state, we don't change the prev state, but always return the new state.
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