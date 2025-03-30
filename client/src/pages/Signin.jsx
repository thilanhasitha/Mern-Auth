import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Signin() {
    const [formData,setFormData] = useState({});
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    const navigate = useNavigate();

    const handleChange =(e)=>{
        setFormData({ ...formData, [e.target.id]:e.target.value});
    }
    console.log(formData); 

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            setLoading(true);

        const res = await fetch('http://localhost:3000/api/v1/signin',{
            method: "POST",  // ✅ Define the request method
            headers: {
                "Content-Type": "application/json"  // ✅ Specify JSON format
            },
            body: JSON.stringify(formData)  // ✅ Convert formData to JSON
        });
        const data = await res.json();
        setLoading(false);
        if(data.success===false){
          setError (true);
          return;
        }
        navigate('/');
          }
        catch(error)
        {
           setLoading(false);
           setError(false);
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
           
    </div>
  )
}
