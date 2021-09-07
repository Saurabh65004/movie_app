import React from 'react';
import {handleMovieSearch, addMovieToList, } from '../actions';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText: "",
        }
    }

    handleAddToMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
    }

    handleChange=(text)=>{
        this.setState({
            searchText: text.target.value,
        })
    }

    handleSearch=()=>{
       const {searchText} = this.state;
       this.props.dispatch(handleMovieSearch(searchText));
    }

    render(){
        const {search} = this.props;
        const {result: movie, showSearchResults}= search;
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                {showSearchResults && 
                    <div className="search-results">
                        <div className="search-result">
                            <img src={movie.Poster} alt="search-pic"/>
                            <div className="movie-info">
                                <span>{movie.Title}</span>
                                <button onClick={()=>this.handleAddToMovies(movie)}>Add To Movies</button>
                            </div>
                        </div>
                    </div>    
                }
                </div>
            </div>
        );
    }
}

export default Navbar;