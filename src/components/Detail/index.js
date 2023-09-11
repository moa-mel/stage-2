import React, { useState, useEffect } from 'react'
import './styles.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MCDetail from '../MCDetail';

const Detail = () => {
    const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: 'da1ce88c922c451a9c80c4e1bc5e8fe1',
          access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFjZTg4YzkyMmM0NTFhOWM4MGM0ZTFiYzVlOGZlMSIsInN1YiI6IjY0ZmU0YzRjZGI0ZWQ2MTAzMmE2NGEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zRLprFhk8a_YXLD1nehNtJ40fEheZVEzCafOwFbjJOw', 
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='detail'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
            {movieDetails.map((movie) => (
                <MCDetail key={movie.id} movie={movie}/>
            ))}
        </div>
      )}
    </div>
  )
}

export default Detail;
