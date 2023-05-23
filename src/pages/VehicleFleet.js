import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import No_image from '../images/No_Image_Available.jpg'

const VehicleFleet = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen w-screen " >
    <div className="w-[25%] bg-gray-200"> 
      <Sidebar/>
    </div>
    <div className="w-[75%] "> 
      <nav className="text-white mt-10"> 
        <Navbar/>
      </nav>
      <div className='flex flex-col items-center h-full bg-white bg-opacity-70 overflow-y-scroll pb-40  '>
        <h1 className='mt-[15px] font-bold'>Vehicle Fleet</h1>
        <p className='mt-10 w-[80%] text-justify'>
            From elfgenat to economical, we offer a choice of vehicles and services designed to meet your transportation needs, all at competitive prices   
       </p>
        <div className='flex w-[80%] mx-auto mt-20  justify-between'>
                <div>
                <h1>HAMPTON AMBASSADOR</h1>
                <p>Content</p>
                </div>
                <img src={No_image} className="w-[150px] h-[150px]"></img>
            
        </div>
        <div className='flex w-[80%] mx-auto mt-20  justify-between'>
                <div>
                <h1>HAMPTON JITNEY</h1>
                <p>Content</p>
                </div>
                <img src={No_image} className="w-[150px] h-[150px]"></img>
            
        </div>
        <div className='flex w-[80%] mx-auto mt-20  justify-between'>
                <div>
                <h1>NORTHFOLK TROLLEY</h1>
                <p>Content</p>
                </div>
                <img src={No_image} className="w-[150px] h-[150px]"></img>
            
        </div>
      </div>
    </div>
  </div>
  )
}

export default VehicleFleet