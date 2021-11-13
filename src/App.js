import './App.css';
import Description from './Description'
import Home from './Components/Home';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";

import bosslevel from './Assets/bosslevel.jpg'
import captainamerica from './Assets/captainamerica.jpg'
import joker from './Assets/joker.jpg'
import paw from './Assets/paw.jpg'
import raees from './Assets/raees.jpg'
import starwars from './Assets/starwars.jpg'
import timeless from './Assets/timeless.jpg'



function App() {
  const [movies, setmovies] = useState(
    [
      {
        id: uuidv4(),
        image: bosslevel,
        title: "Bosslevel",
        year: "2020",
        rating: "4",
        prise: "19DT",
      },
      {
        id: uuidv4(),
        image: captainamerica,
        title: "Captain Aamerica",
        year: "2019",
        rating: "3",
        prise: "25DT",
      },
      {
        id: uuidv4(),
        image: joker,
        title: "Joker",
        year: "2019",
        rating: "5",
        prise: "25DT",
      },
      {
        id: uuidv4(),
        image: paw,
        title: "Paw",
        year: "2020",
        rating: "4",
        prise: "25DT",
      },
      {
        id: uuidv4(),
        image: raees,
        title: "Raees",
        year: "2018",
        rating: "2",
        prise: "12DT",
      },
      {
        id: uuidv4(),
        image: starwars,
        title: "Starwars",
        year: "2017",
        rating: "4",
        prise: "21DT",
      },
      {
        id: uuidv4(),
        image: timeless,
        title: "Timeless",
        year: "2019",
        rating: "3",
        prise: "17DT",
      },
    ]);

  const [searchMovie, setSearchMovie] = useState("");

  const [searchRating, setSearchRating] = useState(1);

  const addNewMovie = (data) => {
    setmovies(movies.concat(data))
  };

  const searchMovieByName = (name) => {
    setSearchMovie(name.target.value);
  };

  const searchMovieByRating = (numRating) => {
    setSearchRating(numRating);
  };

  return (
    <div className="movie-list">
      <Routes>
        <Route path='/' element={ <Home 
          searchMovieByName={searchMovieByName}
          searchMovieByRating={searchMovieByRating}
          searchRating={searchRating}
          searchMovie={searchMovie}
          movies={movies}
          addNewMovie={addNewMovie}
        />} />

        <Route path="description/:id" element={<Description movies={movies} />}/>
      </Routes>
    </div>
  );
}

export default App;
