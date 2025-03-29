import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './component/Header';

export default function App() {
  return (
    
    <BrowserRouter>
    {/* Header section */}
    <Header/>
     <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/about' element={<About/>}/>
      <Route path ='/signin' element={<Signin/>}/>
      <Route path ='/signup' element={<Signup/>}/>
      <Route path ='/profile' element={<Profile/>}/>
     </Routes>
    </BrowserRouter>
   
  )
}
