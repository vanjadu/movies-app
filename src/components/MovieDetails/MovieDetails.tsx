import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../Loader'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FiArrowLeft } from 'react-icons/fi'

const MovieDetails = (): JSX.Element => {
  const { id } = useParams()

  const [movie, setMovie] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const options = {
    method: 'GET',
    url: `https://movies-app1.p.rapidapi.com/api/movie/${id}`,
    headers: {
      'X-RapidAPI-Key': '37ccad15ffmsh694cb81c23c51a8p18a6a3jsn26d96346ddd9',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    },
  }

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true)

      try {
        const res = await axios(options)
        const data = await res.data.result

        setMovie(data)
        setLoading(false)
      } catch (error: any) {
        console.log(error.message)

        toast.error('Something went wrong')
        setMovie(null)
        setLoading(false)
      }
    }

    getMovie()
  }, [])

  console.log(movie)

  return (
    <div className='container mx-auto flex flex-col items-center justify-center py-8 static'>
      <Link
        to='/'
        className='link link-hover flex items-center fixed top-8 left-8'
      >
        <FiArrowLeft className='mr-2' /> Back home
      </Link>
      <h1 className='pt-5 text-4xl font-bold'>Movie Details</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className='container flex justify-center items-center mx-auto mt-20 px-20'>
          <img src={movie?.image} alt={movie.title} />
          <div className='container flex flex-col items-start ml-10'>
            <p className='font-extrabold uppercase opacity-50'>
              {movie.genres[0].name}
            </p>
            <h1 className='text-5xl font-bold'>{movie.title}</h1>
            <p className='ont-extrabold uppercase opacity-50 mt-3'>
              {movie.release}
            </p>
            <p className='ont-extrabold uppercase opacity-50 mt-3'>
              {movie.rating}
            </p>
            <p className='mt-5 opacity-70'>{movie.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails
