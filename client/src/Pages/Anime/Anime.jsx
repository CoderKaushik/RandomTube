import React from 'react'
import { Link } from 'react-router-dom'

const Anime = () => {
  return (
    <div className='w-screen h-screen bg-blue-500 border-[0.5rem] border-blue-600 flex'>
      <div className='w-[40%] h-full border-r-[0.5rem] border-r-blue-600 flex justify-center items-center max-sm:hidden'>
        <p className='text-blue-600 font-bold text-[35rem] p-0'>
            A
        </p>
      </div>
      <div className='w-[60%] h-full flex justify-center items-center'>
        <Link to='watch' className='border-[0.5rem] border-blue-600 p-4 text-[4rem] text-gray-900 rounded-2xl mx-16 hover:bg-blue-600'><button>Watch</button></Link>
        <Link to='/contribute' className='border-[0.5rem] border-blue-600 p-4 text-[4rem] text-gray-900 mx-16 rounded-2xl hover:bg-blue-600'><button>Contribute</button></Link>
      </div>
    </div>
  )
}

export default Anime
