import React from 'react'
import { Link } from 'react-router-dom'

const Motivation = () => {
  return (
    <div className='w-screen h-screen bg-orange-500 border-[0.5rem] border-orange-600 flex'>
      <div className='w-[40%] h-full border-r-[0.5rem] border-r-orange-600 flex justify-center items-center max-sm:hidden'>
        <p className='text-orange-600 font-bold text-[35rem] p-0'>
            M
        </p>
      </div>
      <div className='w-[60%] h-full flex justify-center items-center'>
        <Link to='watch' className='border-[0.5rem] border-orange-600 p-4 text-[4rem] text-gray-900 rounded-2xl mx-16 hover:bg-orange-600'><button>Watch</button></Link>
        <Link to='/contribute' className='border-[0.5rem] border-orange-600 p-4 text-[4rem] text-gray-900 mx-16 rounded-2xl hover:bg-orange-600'><button>Contribute</button></Link>
      </div>
    </div>
  )
}

export default Motivation
