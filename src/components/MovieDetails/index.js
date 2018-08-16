import React from 'react';
import './styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faStar } from '@fortawesome/free-solid-svg-icons';
import { fetchMovieByID } from '../../services/api';

library.add(faStroopwafel, faStar);

class MovieDetails extends React.Component {    
    constructor(props) {
        super(props);
        
        this.state = {
            movie: {}
        };
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        fetchMovieByID(id).
        then(            
            res => this.setState({
                movie: res
            }),
            err => console.log(err)
        )
       
    }

    render() {
        const { Title, Year, Poster, imdbRating, Plot, Writer, Actors } = this.state.movie;
        return (
            <div className="MovieDetails">
                <h1 className="text">{Title} ({Year})</h1>
                <h2 className="text"><FontAwesomeIcon icon={faStar} color="#ffb84d" /> {imdbRating}</h2>
                <p><img className="detailPoster" src={Poster} />  </p>
                <p className="text">{Plot}</p>
                <p className="text"><b>Creator:</b> {Writer}</p>
                <p className="text"><b>Stars:</b> {Actors}</p>
            </div>
        );
    }
}

export default MovieDetails;