import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up Page</h1>
        <form className='flex flex-col gap-5'>
            <input type="text" placeholder='UserName'id='username'className='bg-slate-200 p-3
            rounded-lg'/>
            <input type="text" placeholder='Email'id='email'className='bg-slate-200 p-3
            rounded-lg'/>
            <input type="text" placeholder='Password'id='password'className='bg-slate-200 p-3
            rounded-lg'/>

            <button className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95
            desabled:opacity-80'>Sign Up</button>
        </form>

        <div className='flex gap-3 mt-6'>
            <p>Have an Account?</p>
            <Link to='/signin'>
            <span className='text-blue-500'>Sign In</span>
            </Link>
            </div>
           
    </div>
  )
}
