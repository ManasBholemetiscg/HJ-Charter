import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import ha1 from '../images/vehicleimg/HAMPTON AMBASSADOR/A1.jpg';
import ha2 from '../images/vehicleimg/HAMPTON AMBASSADOR/A2.JPG';
import ha3 from '../images/vehicleimg/HAMPTON AMBASSADOR/A3.jpeg';
import ha4 from '../images/vehicleimg/HAMPTON AMBASSADOR/A4.JPG';
import ha5 from '../images/vehicleimg/HAMPTON AMBASSADOR/A5.JPG';
import ha6 from '../images/vehicleimg/HAMPTON AMBASSADOR/A6.JPG';
import ha7 from '../images/vehicleimg/HAMPTON AMBASSADOR/A7.JPG';
import hj1 from '../images/vehicleimg/HAMPTON JITNEY/J1.JPG';
import hj2 from '../images/vehicleimg/HAMPTON JITNEY/J2.JPG';
import hj3 from '../images/vehicleimg/HAMPTON JITNEY/J3.JPG';
import hj4 from '../images/vehicleimg/HAMPTON JITNEY/J4.JPG';
import hj5 from '../images/vehicleimg/HAMPTON JITNEY/J5.JPG';
import hj6 from '../images/vehicleimg/HAMPTON JITNEY/J6.JPG';
import hj7 from '../images/vehicleimg/HAMPTON JITNEY/J7.JPG';
import hj8 from '../images/vehicleimg/HAMPTON JITNEY/J8.JPG';
import nt1 from '../images/vehicleimg/NORTHFORK TROLLEY/NorthForkTrolley_04.jpg';
import nt2 from '../images/vehicleimg/NORTHFORK TROLLEY/NorthForkTrolley_11.jpg';
import nt3 from '../images/vehicleimg/NORTHFORK TROLLEY/NorthForkTrolley_23.jpg';
import nt4 from '../images/vehicleimg/NORTHFORK TROLLEY/NorthForkTrolley_25.jpg';
import nt5 from '../images/vehicleimg/NORTHFORK TROLLEY/NorthForkTrolley_26.jpg';
import nt6 from '../images/vehicleimg/NORTHFORK TROLLEY/NorthForkTrolley_27.jpg';
import nt7 from '../images/vehicleimg/NORTHFORK TROLLEY/NorthForkTrolley_18.jpg';
import hll1 from '../images/vehicleimg/HAMPTON LUXURY LINER/1.png';
import hll2 from '../images/vehicleimg/HAMPTON LUXURY LINER/2.jpg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VehicleFleet = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen w-screen">
      <div className="w-[25%] bg-gray-200">
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <nav className="text-white mt-0">
          <Navbar />
        </nav>
        <div className="mt-4 mx-4 flex flex-col items-center h-full bg-white border border-black rounded-lg bg-opacity-70 pb-40">
          <h1 className="mt-[25px] font-bold mt-8">Vehicle Fleet</h1>
          <p className="mt-10 w-[80%] text-justify">
            From elegant to economical, we offer a choice of vehicles and services designed to meet your transportation needs, all at competitive prices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%] mx-auto mt-20">
            <div className="flex flex-col items-center">
              <h1>HAMPTON AMBASSADOR</h1>
              <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} className="w-full">
                <img src={ha3} alt="HAMPTON AMBASSADOR Carousel" className="w-[100px] h-[150px]" />
                <img src={ha1} alt="HAMPTON AMBASSADOR Carousel" className="w-[100px] h-[150px]" />
                <img src={ha2} alt="HAMPTON AMBASSADOR Carousel" className="w-[100px] h-[150px]" />
                <img src={ha4} alt="HAMPTON AMBASSADOR Carousel" className="w-[100px] h-[150px]" />
                <img src={ha5} alt="HAMPTON AMBASSADOR Carousel" className="w-[100px] h-[150px]" />
                <img src={ha6} alt="HAMPTON AMBASSADOR Carousel" className="w-[100px] h-[150px]" />
                <img src={ha7} alt="HAMPTON AMBASSADOR Carousel" className="w-[100px] h-[150px]" />
              </Carousel>
            </div>
            <div className="flex flex-col items-center">
              <h1>HAMPTON JITNEY</h1>
              <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} className="w-full">
                <img src={hj4} alt="HAMPTON JITNEY Carousel" className="w-[100px] h-[150px]" />
                <img src={hj1} alt="HAMPTON JITNEY Carousel" className="w-[100px] h-[150px]" />
                <img src={hj2} alt="HAMPTON JITNEY Carousel" className="w-[100px] h-[150px]" />
                <img src={hj3} alt="HAMPTON JITNEY Carousel" className="w-[100px] h-[150px]" />
                <img src={hj5} alt="HAMPTON JITNEY Carousel" className="w-[100px] h-[150px]" />
                <img src={hj6} alt="HAMPTON JITNEY Carousel" className="w-[100px] h-[150px]" />
                <img src={hj7} alt="HAMPTON JITNEY Carousel" className="w-[100px] h-[150px]" />
                <img src={hj8} alt="HAMPTON JITNEY Carousel" className="w-[100px] h-[150px]" />
              </Carousel>
            </div>
            <div className="flex flex-col items-center">
              <h1>NORTHFOLK TROLLEY</h1>
              <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} className="w-full">
                <img src={nt7} alt="NORTHFOLK TROLLEY Carousel" className="w-[100px] h-[150px]" />
                <img src={nt1} alt="NORTHFOLK TROLLEY Carousel" className="w-[100px] h-[150px]" />
                <img src={nt2} alt="NORTHFOLK TROLLEY Carousel" className="w-[100px] h-[150px]" />
                <img src={nt3} alt="NORTHFOLK TROLLEY Carousel" className="w-[100px] h-[150px]" />
                <img src={nt4} alt="NORTHFOLK TROLLEY Carousel" className="w-[100px] h-[150px]" />
                <img src={nt5} alt="NORTHFOLK TROLLEY Carousel" className="w-[100px] h-[150px]" />
                <img src={nt6} alt="NORTHFOLK TROLLEY Carousel" className="w-[100px] h-[150px]" />
              </Carousel>
            </div>
            <div className="flex flex-col items-center">
              <h1>HAMPTON LUXURY LINER</h1>
              <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} className="w-full">
                <img src={hll2} alt="HAMPTON LUXURY LINER Carousel" className="w-[100px] h-[150px]" />
                <img src={hll1} alt="HAMPTON LUXURY LINER Carousel" className="w-[100px] h-[150px]" />
                {/* Add more carousel slides for HAMPTON LUXURY LINER here */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFleet;
