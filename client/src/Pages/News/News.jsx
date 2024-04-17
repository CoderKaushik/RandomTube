import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div className='w-screen h-screen bg-green-500 border-[0.5rem] border-green-600 flex'>
      <div className='w-[40%] h-full border-r-[0.5rem] border-r-green-600 flex justify-center items-center max-sm:hidden'>
        <p className='text-green-600 font-bold text-[35rem] p-0'>
            N
        </p>
      </div>
      <div className='w-[60%] h-full flex justify-center items-center'>
        <Link to='watch' className='border-[0.5rem] border-green-600 p-4 text-[4rem] text-gray-900 rounded-2xl mx-16 hover:bg-green-600'><button>Watch</button></Link>
        <Link to='/contribute' className='border-[0.5rem] border-green-600 p-4 text-[4rem] text-gray-900 mx-16 rounded-2xl hover:bg-green-600'><button>Contribute</button></Link>
      </div>
    </div>
  )
}

export default News
