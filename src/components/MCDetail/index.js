import React from 'react'
import "./styles.css"

const MCDetail = ({ movie }) => {
  return (
    <div>
    <h2>{movie.title}</h2>
    <p>Release Date: {movie.release_date}</p>
    <p>Runtime: {movie.runtime} minutes</p>
    <p>Overview: {movie.overview}</p>
    </div>
  )
}

export default MCDetail