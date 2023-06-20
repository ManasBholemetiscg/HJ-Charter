import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sg1 from '../images/schoolgroups/1.jpeg';
import sg2 from '../images/schoolgroups/2.jpeg';
import sg3 from '../images/schoolgroups/3.jpg';
import sg4 from '../images/schoolgroups/4.jpeg';
import sg5 from '../images/schoolgroups/5.jpg';
import sg6 from '../images/schoolgroups/6.JPG';
import sg7 from '../images/schoolgroups/7.JPG';
import sg8 from '../images/schoolgroups/8.JPG';
import sg9 from '../images/schoolgroups/9.JPG';
import sg10 from '../images/schoolgroups/10.JPG';
import sg11 from '../images/schoolgroups/11.JPG';
import sg12 from '../images/schoolgroups/12.jpg';


const SchoolGroup = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen">
      <div className="w-1/4 bg-green-200 flex flex-col flex-grow">
        <Sidebar />
      </div>
      <div className="w-3/4 flex flex-col">
        <nav className="text-white">
          <Navbar />
        </nav>
        <div className="flex-grow overflow-y-scroll border border-black rounded-lg">
          <div className="border border-black rounded-lg p-4 mt-4 bg-white bg-opacity-75 mx-4">
            <h1 className="text-4xl font-bold mb-4 text-center">School Groups</h1>
            <p>
              Hampton Jitney offers premier coach rentals for extraordinary school trips. Our meticulously maintained coaches provide top-notch amenities, including spacious seating, air conditioning, onboard restrooms, and entertainment systems. With experienced staff to assist you, we ensure a perfect coach rental for your day trip or multi-day excursion. Safety is a priority with school-certified drivers and strict maintenance standards. Contact us at 631-283-4600, ext. 642, or charter@hamptonjitney.com for a customized quote. Let us handle the logistics while you create enriching experiences and lasting memories for your students. Trust Hampton Jitney for an extraordinary and seamless school trip. Contact us today!
            </p>
            <Carousel 
            className="flex justify-between w-[60%] mt-4 mx-auto mt-20"
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            
          >
           <div>
            <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg1} alt="ig1" />
            <p className="mt-4 text-center text-gray-700"></p>
          </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg2} alt="ig2" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg3} alt="ig3" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg4} alt="ig4" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg5} alt="ig5" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg6} alt="ig6" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg7} alt="ig7" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg8} alt="ig8" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg9} alt="ig9" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg10} alt="ig10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>
            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg11} alt="ig11" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>
            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={sg12} alt="ig12" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

          </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolGroup;
