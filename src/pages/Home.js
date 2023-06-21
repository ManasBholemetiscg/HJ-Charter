import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'

const Home = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen w-screen" >
    <div className="w-[25%] bg-gray-200"> 
      <Sidebar/>
    </div>
    <div className="w-[75%] "> 
      <nav className="text-white mt-0"> 
        <Navbar/>
      </nav>
      <MainContent/>
    </div>
  </div>
  )
}

export default Home