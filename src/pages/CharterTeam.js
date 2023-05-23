import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import No_image from '../images/No_Image_Available.jpg'

const CharterTeam = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen w-screen " >
    <div className="w-[25%] bg-gray-200"> 
      <Sidebar/>
    </div>
    <div className="w-[75%] "> 
      <nav className="text-white mt-10"> 
        <Navbar/>
      </nav>
      <div className='flex flex-col items-center h-full bg-white bg-opacity-70'>
        <h1 className='mt-20 font-bold'>MEET THE CHARTER TEAM</h1>
        <p className='mt-10 w-[80%] text-justify'>
            You plan, or we plan for you. Our talented Charter team can make all the arrangements to take your group anywhere you've planned, whether it be a day trip or a weekend excursion. We can order tickets, reserve rooms and arrange your meals - at group excursion rates. And if you want to do something but don't know what, ask us to plan for you.
        </p>
        <div className='flex justify-between w-[80%] mx-auto mt-20'>
            <div className=''>
                <img className="w-[200px] h-[200px]" src={No_image}></img>
                <p className="mt-8">Tina Vaccaro</p>
                <p>Charter Manager</p>
            </div>
            <div >
                <img className="w-[200px] h-[200px]" src={No_image}></img>
                <p className="mt-8">Nina Williams</p>
                <p>Assistant Manager</p>
            </div>
            <div >
                <img className="w-[200px] h-[200px]" src={No_image}></img>
                <p className="mt-8">Ray Guido</p>
                <p>Sales Associate</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CharterTeam