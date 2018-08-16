import React from 'react';
import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel, faStar);

function MovieCard(props) {
    console.log(props.movie);
    const { Title, Year, Poster, imdbRating, imdbID } = props.movie;
    return (               
            <div className="MovieCard">
                <h1 className="text">{Title} ({Year})</h1>
                <h2 className="text"><FontAwesomeIcon icon={faStar} color="#ffb84d" /> {imdbRating}</h2>               
                <img className="poster" src={Poster} />                
            </div>               
    );
}

export default MovieCard;





