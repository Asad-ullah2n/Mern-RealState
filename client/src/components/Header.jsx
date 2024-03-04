import React from 'react'
import {FaSearch}  from 'react-icons/fa'
const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
          <div className='flex items-center justify-between'>
              <h1 className='text-sm text-bold sm:text-large'>
                  
              <span className='text-slate-700'>Asad Ullah</span>
              </h1>
              <form className='bg-slate-100 rounded-lg items-center flex bg-transparent'>
                  <input  type="text" placeholder='Search' className='focus:outline-none w-24 sm:w-64' />
                  <FaSearch className='text-slate-600'/>
              </form>
              <ul className='flex gap-5 '>
                  <li className='text-slate-500 hidden sm:inline hover:underline'>Home</li>
                  <li className='text-slate-500 hidden sm:inline hover:underline'>About</li>
                  <li className='text-slate-500 hidden sm:inline hover:underline'>SignIn</li>
              </ul>
      </div>
    </header>
  )
}

export default Header
