import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import cg1 from '../images/cpg/1.jpg';
import cg2 from '../images/cpg/c2.jpg';
import cg3 from '../images/cpg/c3.jpg';
import cg4 from '../images/cpg/c4.jpg';
import cg5 from '../images/cpg/c5.jpg';
import cg6 from '../images/cpg/c6.jpg';
import cg7 from '../images/cpg/c7.jpg';
import cg8 from '../images/cpg/c8.jpg';
import cg9 from '../images/cpg/c9.jpg';
import cg10 from '../images/cpg/c10.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CorporatePrivateAthleticGroups = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen">
      <div className="w-1/4 bg-green-200 flex flex-col flex-grow">
        <Sidebar/>
      </div>
      <div className="w-3/4 flex flex-col">
        <nav className="text-white">
          <Navbar />
        </nav>
        <div className="flex-grow overflow-y-scroll">
          <div className="border border-black rounded-lg p-4 mt-4 bg-white bg-opacity-75 mx-4">
            <h1 className="text-4xl font-bold mb-4 text-center ">Corporate, Private, & Athletic Groups</h1>
            <div className="border border-black rounded-lg p-4 mt-4 bg-white bg-opacity-75 mx-4">
              <h1 className="text-4xl font-bold mb-4 text-center">Corporate Events</h1>
              <p>
                Elevate your corporate event with Hampton Jitney's premier coach rentals. Our luxurious coaches offer comfortable and stylish transportation for your esteemed guests. With spacious interiors, plush seating, and modern amenities, our coaches create a sophisticated and professional atmosphere. Our dedicated team will customize the rental to your specific needs, ensuring a seamless and memorable experience. Contact us at 631-283-4600 ext. 462 or charter@hamptonjitney.com for a personalized quote. Trust Hampton Jitney for reliable and elegant transportation that reflects your corporate brand. Our experienced drivers prioritize punctuality, safety, and attention to detail, ensuring your guests' comfort and timely arrival. Let us handle the transportation logistics while you focus on executing a successful event. Choose Hampton Jitney for a memorable experience that leaves a lasting impression. Contact us today!
              </p>
            </div>
            <div className="border border-black rounded-lg p-4 mt-4 bg-white bg-opacity-75 mx-4">
              <h1 className="text-4xl font-bold mb-4 text-center">Sports Team</h1>
              <p>
                Enhance your sports team's journey with Hampton Jitney's top-of-the-line coach rentals. Our coaches are designed to cater specifically to sports teams, providing a comfortable and convenient mode of transportation for athletes, coaches, and staff. With spacious interiors, ample equipment storage, and modern amenities, our coaches ensure a smooth and enjoyable trip to competitions, tournaments, or training sessions. Safety is a priority, with regular maintenance checks and experienced drivers. Contact us at 631-283-4600, ext. 642, or charter@hamptonjitney.com to arrange the perfect coach rental tailored to your needs. Choose Hampton Jitney for a seamless journey that boosts team spirit and sets the stage for success. Contact us today!
              </p>
            </div>
            <Carousel 
            className="flex justify-between w-[60%] mt-4 mx-auto mt-20"
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            
          >
           <div>
            <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg1} alt="ig1" />
            <p className="mt-4 text-center text-gray-700"></p>
          </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg2} alt="ig2" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg3} alt="ig3" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg4} alt="ig4" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg5} alt="ig5" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg6} alt="ig6" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg7} alt="ig7" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg8} alt="ig8" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg9} alt="ig9" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={cg10} alt="ig10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

          </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePrivateAthleticGroups;
