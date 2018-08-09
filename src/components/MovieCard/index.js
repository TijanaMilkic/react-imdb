import React from 'react'

function MovieCard(props) {    
    const {Title, Poster, imdbRating} = props.movie;
    return (
        <div>
            <h1>Tijanaaaaaaaaaaaaaa</h1>
            <img src={Poster}/>
            <h1>{Title}</h1>
            <h2>IMDB Rating: {imdbRating}</h2>
        </div>
    );
}

export default MovieCard;

