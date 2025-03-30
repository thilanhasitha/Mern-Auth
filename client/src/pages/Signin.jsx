import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';

export default function Signin() {
    const [formData,setFormData] = useState({});
    const {loading,error} = useSelector((state)=>state.user);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange =(e)=>{
        setFormData({ ...formData, [e.target.id]:e.target.value});
    }
    console.log(formData); 

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
           dispatch(signInStart());

        const res = await fetch('http://localhost:3000/api/v1/signin',{
            method: "POST",  // ✅ Define the request method
            headers: {
                "Content-Type": "application/json"  // ✅ Specify JSON format
            },
            body: JSON.stringify(formData)  // ✅ Convert formData to JSON
        });
        const data = await res.json();
       
        if(data.success===false){
          dispatch(signInFailure(data));
          console.log(data);
          return;
        }
        dispatch(signInSuccess(data));
        navigate('/');
          }
        catch(error)
        {
           dispatch(signInFailure(error));
           console.log(error.message);
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In Page</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          
            <input type="text" placeholder='Email'id='email'className='bg-slate-200 p-3
            rounded-lg' onChange={handleChange}/>
            <input type="text" placeholder='Password'id='password'className='bg-slate-200 p-3
            rounded-lg' onChange={handleChange}/>

            <button disabled={loading} className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95
            desabled:opacity-80'>
                {loading ? 'Loading...':'Sign In'}
            </button>
        </form>

        <div className='flex gap-3 mt-6'>
            <p>Don't have an Account?</p>
            <Link to='/signup'>
            <span className='text-blue-500'>Sign Up</span>
            </Link>
            </div>
           <p className='text-red-700 mt-5'>{error ? error.message || 'Something went wrong!':''}</p>
    </div>
  )
}
