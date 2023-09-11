import React, { useState, useEffect } from 'react'
import './styles.css'
import axios from 'axios';
import MovieCard from '../MovieCard';


const MovieList = () => {
    const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/top_rated', {
      params: {
        api_key: 'da1ce88c922c451a9c80c4e1bc5e8fe1',
        access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFjZTg4YzkyMmM0NTFhOWM4MGM0ZTFiYzVlOGZlMSIsInN1YiI6IjY0ZmU0YzRjZGI0ZWQ2MTAzMmE2NGEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zRLprFhk8a_YXLD1nehNtJ40fEheZVEzCafOwFbjJOw',
      },
    })
    .then((response) => {
      setTopMovies(response.data.results.slice(0, 10));
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching top movies:', error);
      setLoading(false);
    });
  }, []);

  return (
    <div className='movie-container'>
    <div className='movie-list'>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
    </div>
  )
}

export default MovieList