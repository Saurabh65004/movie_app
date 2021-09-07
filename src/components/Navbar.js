import React from 'react';
import { handleMovieSearch } from '../actions';
import { search } from '../reducers';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showSearchResult: true,
            searchText: "",
        }
    }

    // handleAddToMovies=(movie)=>{
    //     this.props.dispatch(addMovieToList(movie));
    //     this.setState({
    //         showSearchResult: false;
    //     });
    // }

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
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                </div>
            </div>
        );
    }
}

export default Navbar;