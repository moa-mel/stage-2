import React, {useEffect, useState} from 'react'
import './styles.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import imdb from "../../images/imdb.png"
import png from "../../images/PngItem_1381056 1.png"
import favourite from "../../images/Favorite.png"


const countryAbbreviations = {
    'United States of America': 'USA',
    'United Kingdom': 'UK',
    // Add more countries as needed
  };

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);
    
  
    useEffect(() => {
      // Fetch movie details by ID when the component mounts
      axios
        .get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
          params: {
            api_key: 'da1ce88c922c451a9c80c4e1bc5e8fe1',
        access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFjZTg4YzkyMmM0NTFhOWM4MGM0ZTFiYzVlOGZlMSIsInN1YiI6IjY0ZmU0YzRjZGI0ZWQ2MTAzMmE2NGEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zRLprFhk8a_YXLD1nehNtJ40fEheZVEzCafOwFbjJOw',
          },
        })
        .then((response) => {
          setMovieDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching movie details:', error);
          setLoading(false);
        });
    }, [movie.id]);

    const releaseYear = new Date(movie.release_date).getFullYear();
    const ratingPercentage = movieDetails.vote_average * 10;
    const countryName = movieDetails.production_countries?.[0]?.name || 'Not available';
    const countryAbbreviation = countryAbbreviations[countryName] || countryName;

    return (
        <div className="movie-card" data-testid="movie-card">
            <Link to={`/movies/${movie.id}`} className='mv-link'>
                <div className='card-img'>
                    <img style={{ marginLeft: "10px", marginTop: "30px" }}
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        data-testid="movie-poster"
                    />
                </div>
                <div className='card-bottom'>
                    <div className='card-info'>
                        <div className='grrr'>
                          <img src={favourite} alt={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                          className='mc-f'
                          onClick={() => onToggleFavorite(movie)}
                          />
                        {!loading && (
              <div>
                <div className='urh'>
                <p> {countryAbbreviation},</p>
                <p data-testid="movie-release-date">{releaseYear}</p> 
                </div>
                <h3 data-testid="movie-title">{movie.title}</h3>
                <div className='ert'>
                    <div className='vil'>
                        <img src={imdb} alt='' className='mv-img'/>
                        <p>84%</p>
                    </div>
                    <div className='liv'>
                        <img src={png} alt='' className='mv-img'/>
                    <p>{ratingPercentage}%</p>
                    </div>
                </div>
                 <p> {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
                
              </div>
            )}        
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard