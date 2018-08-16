import React from 'react';
import './styles.css';
import MovieCard from '../MovieCard/index';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

function Watchlist(props) {
    const { movieList } = props;   
    return (        
        <div className="watchlist">
            {movieList.map(movie => (
            <div>
                <Link key={movie.imdbID} to={{ pathname: `/movieDetails/${movie.imdbID}` }}><MovieCard movie={movie} /> </Link>                
                </div>
            ))}
                
        </div>
        
    );
}

export default Watchlist;