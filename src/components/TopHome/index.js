import React, { useState } from 'react'
import './styles.css'
import logo from "../../images/tv.png"
import search from "../../images/Search.png"
import menu from "../../images/Menu.png"
import rate from "../../images/Rating.png"
import wv from "../../images/Button.png"
import axios from 'axios';
import MovieCard from '../MovieCard'

const TopHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSearch = () => {
    setSearchLoading(true);
    // Make an API request to search for movies based on `searchQuery`
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'da1ce88c922c451a9c80c4e1bc5e8fe1',
          access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTFjZTg4YzkyMmM0NTFhOWM4MGM0ZTFiYzVlOGZlMSIsInN1YiI6IjY0ZmU0YzRjZGI0ZWQ2MTAzMmE2NGEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zRLprFhk8a_YXLD1nehNtJ40fEheZVEzCafOwFbjJOw',
          query: searchQuery,
        },
      })
      .then((response) => {
        setSearchResults(response.data.results);
        setSearchLoading(false);
      })
      .catch((error) => {
        console.error('Error searching for movies:', error);
        setSearchLoading(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='topHome'>
        <div className='th-container'>
        {/*header*/}
        <div className='th-header'>
        <div className='th-h1'>
            <img src={logo} alt='' className='thh1-img'/>
            <p className='thh-p'>MovieBox</p>
        </div>
        <div className='th-h2'>
            <input 
            type='text'
            placeholder='What do you want to watch?'
            className='navbar-input'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress} 
            />
            <img src={search} alt='' className='thh2-img'/>
        </div>
        <div className='th-h3'>
            <p className='thh-p1'>Sign in</p>
            <img src={menu} alt='' className='thh3-img'/>
        </div>
        </div>
       
         {/*main*/}
         <h1 className='thm-h1'>John Wick 3 : <br/>
         Parabellum</h1>
          <img src={rate} alt='' className='thm-img'/>
          <p className='thm-p'>John Wick is on the run after killing a member <br/>
            of the international assassins' guild, and with <br/>
             a $14 million price tag on his head, he is the <br/>
             target of hit men and women everywhere.</p>
          <img src={wv} alt='' className='thm-img2'/>
          {searchLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
         </div>
        </div>
  )
}

export default TopHome