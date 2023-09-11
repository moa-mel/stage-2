import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

    return (
        <div className="movie-card" data-testid="movie-card">
            <Link to={`/movies/${movie.id}`}>
                <div className='card-img'>
                    <img style={{ marginLeft: "10px", marginTop: "30px" }}
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        data-testid="movie-poster"
                    />
                </div>
                <div className='card-bottom'>
                    <div className='card-info'>
                        <h3 data-testid="movie-title">{movie.title}</h3>
                        <p data-testid="movie-release-date">{movie.release_date}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard