import React from 'react'

import Navbar from '../../components/Navbar';


const HomeScreen = () => {

  return (
  <>
  <div className='relative h-screen text-white '>
    <Navbar/>
    <img src='/extraction.jpg' alt='Hero img'
    className='absolute top-0 left-0 w-full h-full object-cover -z-50'
    />
  </div>
  
  </>

 
  );
}

export default HomeScreen
