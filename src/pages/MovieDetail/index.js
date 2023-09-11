import React from 'react'
import './styles.css'
import Side from '../../components/Side'
import Detail from '../../components/Detail'

const MovieDetail = ({movieDetails}) => {
  return (
    <div className='movieDetail'>
      <Side />
      <Detail movieDetails={movieDetails}
      /> 
    </div>
  )
}

export default MovieDetail;
