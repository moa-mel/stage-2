import React, { useState, useEffect } from 'react'
import './styles.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import G55 from "../../images/Group 55.png"
import G52 from "../../images/Group 52.png"
import G521 from "../../images/Group 52(1).png"

const Detail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [trailerVideoId, setTrailerVideoId] = useState(null);
  const [director, setDirector] = useState('');
  const [writers, setWriters] = useState([]);
  const [stars, setStars] = useState([]);

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
        setLoading(false);
        console.log("yes")
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setLoading(false);
        console.log("no")
      });
  }, [id]);

  useEffect(() => {
    // Fetch trailer video using the YouTube Data API
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'AIzaSyAIKFlFDTiw85gzQOZBGSpdIQuYXlI4XDM',
          q: `${movieDetails.title} trailer`,
          part: 'snippet',
          type: 'video',
          maxResults: 1,
        },
      })
      .then((response) => {
        const videoId = response.data.items[0]?.id?.videoId;
        setTrailerVideoId(videoId);
      })
      .catch((error) => {
        console.error('Error fetching trailer video:', error);
      });
  }, [movieDetails.title]);

  useEffect(() => {
    // Fetch credits to get director and writers
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        params: {
          api_key: 'da1ce88c922c451a9c80c4e1bc5e8fe1',
          access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFjZTg4YzkyMmM0NTFhOWM4MGM0ZTFiYzVlOGZlMSIsInN1YiI6IjY0ZmU0YzRjZGI0ZWQ2MTAzMmE2NGEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zRLprFhk8a_YXLD1nehNtJ40fEheZVEzCafOwFbjJOw',
        },
      })
      .then((response) => {
        const credits = response.data;
        const movieDirector = credits.crew.find((member) => member.job === 'Director');
        const movieWriters = credits.crew.filter((member) => member.department === 'Writing');
        setDirector(movieDirector?.name || 'Not available');
        setWriters(movieWriters.map((writer) => writer.name));
      })
      .catch((error) => {
        console.error('Error fetching credits:', error);
      });
  }, [id]);
  const ratingPercentage = movieDetails.vote_average * 10;

  useEffect(() => {
    // Fetch cast to get stars
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        params: {
          api_key: 'da1ce88c922c451a9c80c4e1bc5e8fe1',
          access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFjZTg4YzkyMmM0NTFhOWM4MGM0ZTFiYzVlOGZlMSIsInN1YiI6IjY0ZmU0YzRjZGI0ZWQ2MTAzMmE2NGEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zRLprFhk8a_YXLD1nehNtJ40fEheZVEzCafOwFbjJOw',
        },
      })
      .then((response) => {
        const credits = response.data;
        const topStars = credits.cast.slice(0, 5); // Get the top 5 cast members as stars
        setStars(topStars.map((star) => star.name));
      })
      .catch((error) => {
        console.error('Error fetching credits:', error);
      });
  }, [id]);

  const formattedReleaseDate = new Date(movieDetails.release_date).toUTCString();

  return (
    <div className='detail'>
      <div className='det-trailer'>
        {trailerVideoId && (
          <div>
            <iframe
              width="760"
              height="315"
              src={`https://www.youtube.com/embed/${trailerVideoId}`}
              title="Trailer"
              allowFullScreen
              frameborder="0"
            ></iframe>
          </div>
        )}
      </div>
      <div className='dt-down'>
        <div className='dd-one'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              <div className='mdupo'>
              <div className='md-top'>
                <h2 className='mdh2' data-testid="movie-title">{movieDetails.title}.</h2>
                <h2 className='mdp' data-testid="movie-release-date">{formattedReleaseDate}.</h2>
                <h2 className='mdh21' data-testid="movie-runtime">{movieDetails.runtime} minutes</h2>   
              </div>
              <button className='mdbut'>{movieDetails.genres.map((genre) => genre.name).join(', ')}</button>
              </div>
              <p data-testid="movie-overview">{movieDetails.overview}</p>
            </div>
          )}
          <br/>
          <p>Director: <a>{director}</a></p>
          <p>Writers: <a>{writers.join(', ')}</a></p>
          <p>Stars: <a>{stars.join(', ')}</a></p>
          <img src={G521} alt='' className='g521'/>
        </div>
        <div className='dd-two'>
          <img src={G55} alt='' className='ddt-img' />
          <img src={G52} alt='' className='ddt-img1' />
        </div>
      </div>

    </div>
  )
}

export default Detail;
