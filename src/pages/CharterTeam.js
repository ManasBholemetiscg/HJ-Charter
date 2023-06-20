import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
//import MainContent from '../components/MainContent';
import img1 from '../images/aboutusimg/1.JPG';
import img2 from '../images/aboutusimg/2.JPG';
import img3 from '../images/aboutusimg/3.JPG';
import img4 from '../images/aboutusimg/4.JPG';
import img5 from '../images/aboutusimg/5.JPG';
import img6 from '../images/aboutusimg/6.JPG';
import img7 from '../images/aboutusimg/7.JPG';
import img8 from '../images/aboutusimg/8.JPG';
import img9 from '../images/aboutusimg/9.JPG';
import img10 from '../images/aboutusimg/10.JPG';

const CharterTeam = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen w-screen">
      <div className="w-[25%] bg-gray-200">
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <nav className="text-white mt-0">
          <Navbar />
        </nav>
        <div className="flex flex-col items-center h-full bg-white bg-opacity-70 border border-black rounded-lg mx-4 mt-4 mb-8 pb-8">
          <h1 className="mt-20 font-bold mt-8">ABOUT US</h1>
          <p className="mt-10 w-[80%] text-justify mt-4">
            You plan, or we plan for you. Our talented Charter team can make all the arrangements to take your group anywhere you've planned, whether it be a day trip or a weekend excursion. We can order tickets, reserve rooms and arrange your meals - at group excursion rates. And if you want to do something but don't know what, ask us to plan for you.
          </p>
        
          <Carousel 
            className="flex justify-between w-[50%] mt-4 mx-auto mt-24"
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            
          >
           <div>
            <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img1} alt="img10" />
            <p className="mt-4 text-center text-gray-700"></p>
          </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img2} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img3} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img4} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img5} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img6} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img7} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img8} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img9} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

            <div>
              <img className="w-[200px] h-[400px] aspect-w-1 aspect-h-1 rounded-lg shadow-md" src={img10} alt="img10" />
              <p className="mt-4 text-center text-gray-700"></p>
            </div>

          </Carousel>
          
        </div>
      </div>
    </div>
  );
};

export default CharterTeam;
