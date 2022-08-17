import React from 'react'
import { Link } from 'react-router-dom'
import movieImg from '../../assets/movie.jpg'

interface Props {
  title: string
  description: string
  genres: string[]
  image: string
  rating: string
  year: string
  _id: string
}

const MovieCard = ({ title, image, rating, year, _id }: Props): JSX.Element => {
  return (
    <div className='card w-90 max-w-90 bg-base-200 shadow-sm hover:shadow-md'>
      <figure>
        <img src={image ? image : movieImg} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='opacity-70 font-bold'>{year}</p>
        <p className='opacity-50 font-extrabold'>{rating}</p>
        <div className='card-actions justify-center'>
          <Link to={`/movie/${_id}`} className='btn btn-wide mt-5'>
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
