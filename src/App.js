import React, {useState} from "react"
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";


function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  function toggleFavorite(movie) {
    const isFavorite = favoriteMovies.some((favMovie) => favMovie.id === movie.id);
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favoriteMovies.filter((favMovie) => favMovie.id !== movie.id);
      setFavoriteMovies(updatedFavorites);
    } else {
      // Add to favorites
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  }
  return (
    <div className="App">
     <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/movies/:id" element={<MovieDetail/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
