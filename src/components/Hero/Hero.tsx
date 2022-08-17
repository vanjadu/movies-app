import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import MovieCard from '../MovieCard'
import Loader from '../Loader'

const Hero = (): JSX.Element => {
  const [movies, setMovies] = useState<Array<any> | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/movies',
    headers: {
      'X-RapidAPI-Key': '37ccad15ffmsh694cb81c23c51a8p18a6a3jsn26d96346ddd9',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    },
  }

  useEffect(() => {
    const getRecepies = async () => {
      setLoading(true)

      try {
        const res = await axios(options)

        const data = await res.data.results
        setMovies(data)
        setLoading(false)
      } catch (error: any) {
        console.log(error.message)

        toast.error('Something went wrong')
        setMovies(null)
        setLoading(false)
      }
    }

    getRecepies()
  }, [])

  return (
    <section className='container mx-auto px-4 py-10 flex flex-col items-center'>
      <h1 className='text-4xl font-bold'>Choose a movie</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className='container mx-auto mt-20 flex justify-center items-start flex-wrap gap-10'>
          {movies?.map((movie: any, i: any) => (
            <MovieCard key={i} {...movie} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Hero
