import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard/index';

class App extends Component {
  // componentDidMount() {
  //   const key = '169fcd3a';
  //   const baseURL = `http://www.omdbapi.com/?apikey=${key}&?t=titanic`;
  //   fetch(baseURL)
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // }

  

  render() {
    const m = {
      "Title": "Dirk Gently's Holistic Detective Agency",
        "Year": "2016–2017",
        "Rated": "TV-14",
        "Released": "22 Oct 2016",
        "Runtime": "60 min",
        "Genre": "Comedy, Mystery, Sci-Fi",
        "Director": "N/A",
        "Writer": "Max Landis",
        "Actors": "Samuel Barnett, Elijah Wood, Hannah Marks, Jade Eshete",
        "Plot": "Holistic detective Dirk Gently investigates cases involving the supernatural.",
        "Language": "English",
        "Country": "USA",
        "Awards": "1 win & 2 nominations.",
        "Poster": "https://ia.media-imdb.com/images/M/MV5BMTU3MDkzNzM5NF5BMl5BanBnXkFtZTgwMzEyNTgyMDI@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "8.4/10"
          }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "27,535",
        "imdbID": "tt4047038",
        "Type": "series",
        "totalSeasons": "2",
        "Response": "True"
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SSSSSS to Tijana's app</h1>
        </header>
        <MovieCard movie={m}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
