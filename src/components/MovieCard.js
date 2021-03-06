
import React from 'react';
import { addToFavourites, removeFromFavourites } from '../actions';

class MovieCard extends React.Component{
    
    onFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addToFavourites(movie));
    }

    unFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }
    render(){
        const {movie, isFavourite}=this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                       {
                           isFavourite ? <button className="unfavourite-btn" onClick={this.unFavouriteClick}>UnFavourite</button>
                           : <button className="favourite-btn" onClick={this.onFavouriteClick}>Favourite</button>
                       } 
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieCard;