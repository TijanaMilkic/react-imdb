import React from 'react';
import MovieCard from '../MovieCard/index';
import { fetchMovie } from '../../services/api';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            movie: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetchMovie(this.state.title).
            then(                
                res => this.setState({
                    movie: res
                }),
                err => console.log(err)
            )

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" required placeholder="Find Movies" value={this.state.title} onChange={this.handleChange} />&nbsp;
                    <input type="submit" value="Search" />
                </form>
                {Object.keys(this.state.movie).length != 0 && <Link key={this.state.movie.imdbID} to={{ pathname: `/movieDetails/${this.state.movie.imdbID}` }}><MovieCard key={this.state.movie.imdbID} movie={this.state.movie} /> </Link>}
            </div>
        )
    }
}
export default SearchForm;
