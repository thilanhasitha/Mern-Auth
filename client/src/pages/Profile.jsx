import React from 'react'
import { useSelector } from 'react-redux'
import { deleteUserStart,deleteUserSuccess,deleteUserFailure } from '../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';

export default function Profile() {

  const dispatch = useDispatch();
  const {currentUser} = useSelector(state=>state.user);

  const handleDeleteAccount = async()=>{
    try{
      dispatch(deleteUserStart());
         const res = await fetch(`http://localhost:3000/api/v1/user/delete/${currentUser._id}`,{
          method:'DELETE',

         });
         const data =  await res.json();
         if(data.success===false){
          dispatch(deleteUserFailure(data));
          return 
         }
         dispatch(deleteUserSuccess(data));
    }
    catch(error){
     dispatch(deleteUserFailure(error));
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>profile</h1>
      <form className='flex flex-col gap-5'>
        <img 
        src={currentUser.ProfilePicture} 
        alt="profile" 
        className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-3'/>

        <input defaultValue={currentUser.username} type='text' id='username' placeholder='UserName' className='bg-slate-300 rounded-lg p-3'/>
        <input defaultValue={currentUser.email} type='text' id='email' placeholder='Email' className='bg-slate-300 rounded-lg p-3'/>
        <input  type='text' id='password' placeholder='Password' className='bg-slate-300 rounded-lg p-3'/>

       <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span onClick={handleDeleteAccount} className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}

