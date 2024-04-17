import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='h-screen w-screen bg-gray-500 flex flex-col gap-4 justify-center items-center'>
        <h1 className='font-bold text-[5rem] max-sm:text-[2rem] text-center text-gray-900'>What Do You Want To Watch Today?</h1>
        <Link to='/categories-2'><button className='font-bold text-[5rem] max-sm:text-[2rem] text-gray-800 animate-color2-change animate-colorbg-change px-6 rounded-2xl border-[0.5rem]'>Next --{'>'}</button></Link>
    </div>
  )
}

export default Categories
