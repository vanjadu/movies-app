import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='container mx-auto py-10 flex flex-col justify-center items-center'>
      <TailSpin height='100' width='100' color='#00BFFF' />
    </div>
  )
}

export default Loader
