import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import wd1 from '../images/wedding/1.jpeg';
import wd2 from '../images/wedding/2.jpg';
import wd3 from '../images/wedding/3.jpeg';
import wd4 from '../images/wedding/4.jpeg';
import wd5 from '../images/wedding/5.jpeg';
import wd6 from '../images/wedding/6.jpeg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Wedding = () => {
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
            <h1 className="text-4xl font-bold mb-4 text-center">Wedding</h1>
            <p>
              Hampton Jitney offers vintage wedding trolleys for a stylish and nostalgic touch to your special day. These trolleys provide a charming backdrop for wedding festivities, whether it's transporting the wedding party, capturing memorable photos, or giving guests a unique experience. With spacious interiors, classic design, open-air seating, panoramic windows, and charming details, our trolleys offer comfort and a delightful journey. Our dedicated team takes care of all the details to ensure a flawless and memorable transportation experience. To inquire and get a customized quote, contact us at 631-283-4600, extension 642, or charter@hamptonjitney.com. Let us help create lasting memories on your wedding day.
            </p>
            <Carousel 
              className="flex justify-between w-[60%] mt-4 mx-auto mt-20"
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img className="w-[200px] h-[400px] rounded-lg shadow-md" src={wd1} alt="ig1" />
                <p className="mt-4 text-center text-gray-700"></p>
              </div>
              <div>
                <img className="w-[200px] h-[400px] rounded-lg shadow-md" src={wd2} alt="ig2" />
                <p className="mt-4 text-center text-gray-700"></p>
              </div>
              <div>
                <img className="w-[200px] h-[400px] rounded-lg shadow-md" src={wd3} alt="ig3" />
                <p className="mt-4 text-center text-gray-700"></p>
              </div>
              <div>
                <img className="w-[200px] h-[400px] rounded-lg shadow-md" src={wd4} alt="ig4" />
                <p className="mt-4 text-center text-gray-700"></p>
              </div>
              <div>
                <img className="w-[200px] h-[400px] rounded-lg shadow-md" src={wd5} alt="ig5" />
                <p className="mt-4 text-center text-gray-700"></p>
              </div>
              <div>
                <img className="w-[200px] h-[400px] rounded-lg shadow-md" src={wd6} alt="ig6" />
                <p className="mt-4 text-center text-gray-700"></p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
