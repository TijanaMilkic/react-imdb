import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/index';
import Watchlist from './components/Watchlist/index';
import MovieCard from './components/MovieCard/index';
import Header from './components/Header/index';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/index';
import movieList from './services/mockData';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <nav className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/watchlist">Watchlist</Link></li>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/watchlist" render={() => <Watchlist movieList={movieList} />} />
          <Route path="/movieDetails/:id" component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;