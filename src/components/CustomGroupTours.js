import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ct1 from '../images/customtours/1.jpg';
import ct2 from '../images/customtours/2.jpg';
import ct3 from '../images/customtours/3.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomGroupTours = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen">
      <div className="w-1/4 bg-green-200 flex flex-col flex-grow">
        <Sidebar />
      </div>
      <div className="w-3/4 flex flex-col">
        <nav className="text-white">
          <Navbar />
        </nav>
        <div className="flex-grow overflow-y-scroll">
          <div className="border border-black rounded-lg p-4 mt-4 bg-white bg-opacity-75 mx-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Custom Group Tours</h1>
            <p>
              Hampton Jitney specializes in providing exceptional private group tours tailored to your specific needs and preferences. Whether you're planning a sightseeing adventure, a winery tour, or a cultural exploration, our experienced team will work closely with you to create a customized itinerary that captures the essence of your desired destination. With our fleet of comfortable and well-maintained vehicles, professional drivers, and attention to detail, we ensure a seamless and enjoyable tour experience. Sit back, relax, and let Hampton Jitney take care of all the logistics while you and your group create unforgettable memories. Choose Hampton Jitney for private group tours that exceed your expectations.
            </p>
            <Carousel 
            className="flex justify-between w-[60%] mt-4 mx-auto mt-20"
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            
          >
           <div>
            <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={ct1} alt="ig1" />
            <p className="mt-4 text-center text-gray-700"></p>
          </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={ct2} alt="ig2" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={ct3} alt="ig3" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>


          </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomGroupTours;
