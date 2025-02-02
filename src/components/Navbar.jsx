import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link to="/">
       <h1 className='text-red-600 cursor-pointer text-4xl font-bold'>NETFLIX</h1>
      </Link>
       
       <div>
       
        <Link to="/LogIn">
        <button className='text-white pr-4'>Log In</button>
        </Link>
        
        <Link to="/SignUp">
          <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'> Sign Up</button>
        </Link>
      
       </div>
    </div>
  )
}

export default Navbar
