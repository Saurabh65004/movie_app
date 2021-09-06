import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addMovies, showfavourites, showMovies } from '../actions';


class App extends React.Component {

    componentDidMount(){
      const {store}=this.props;

      store.subscribe(()=>{
        console.log("Updated");
        this.forceUpdate();
      });
      //subscribing to changes
      
      //make api calls
      // this.props.store.dispatch(
      //   {
      //     type: 'ADD_MOVIES',
      //     movies: data,
      //   }
      // );
      store.dispatch(addMovies(data));
      //dispatch actions    
      console.log("Curr State: ",this.props.store.getState())
       
      }

      isMovieFavourite=(movie)=>{
        const {movies}= this.props.store.getState();      //{movies: {} , search: {}}
        // const {favourites}=movies.favourites;
        const {favourites}=movies;

        const index=favourites.indexOf(movie);
        if(index !== -1){
          return true;
        }
        return false;
      }

    render(){
      console.log('Render', this.props.store.getState());
      const { movies } =this.props.store.getState();
      console.log("MOVIES", movies);
      const {list, favourites, favouriteDisplay} = movies;
      //const movies=this.props.store.getState();

      return (
        <div className="App">
          <Navbar />
          <div className="main">
              <div className="tabs">
                <div className="tab" onClick={()=>this.props.store.dispatch(showMovies())}>
                    Movies
                </div>
                <div className="tab" onClick={()=>this.props.store.dispatch(showfavourites())}>
                      Favourites
                </div>
              </div>
              <div className="list">
                {/* {data.map((movie, index)=>{
                  return <MovieCard movie={movie} key={`movies-${index}`}/>
                })} */}
                {favouriteDisplay? favourites.map((movie, index)=>{
                  return <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)}/>
                }) 
                : list.map((movie, index)=>{
                  return <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isMovieFavourite(movie)}/>
                })}
            </div>
          </div>
            
        </div>
      );
    }
}

export default App;

/*
  Even after dispatching the actions and reducers returning the new state simply won't 
  store.subscribe() is used to subscribe to changes, which accepts a callbacks function which will be executed when a change in state occurs.

  //Never use this.forceUpdate() to force an update to the UI.

  Calling dispatch without any conditions is technically possible, however it leads to an infinite loop as every 
  dispatch() call usually triggers listener again.
  thus causing stack overflow error.
*/