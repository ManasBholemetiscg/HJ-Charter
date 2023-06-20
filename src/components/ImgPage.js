import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import logoImage from "../images/img.png";

const ImgPage = () => {
  return (
    <div className="flex bg-custom-image bg-cover h-screen w-screen " >
    <div className="w-[25%] bg-gray-200"> 
      <Sidebar/>
    </div>
    <div className="w-[75%]"> 
      <nav className="text-white mt-0"> 
        <Navbar/>
      </nav>
        <div className="bg-green-900 text-white text-center py-4">
          <img src={logoImage} alt="Logo" className="mx-auto w-64 h-16" />
        </div>
        <div className="p-4 border border-black-300 rounded-lg bg-white bg-opacity-75 p-6 mt-6 mx-6">
          <h1 className="flex justify-center text-2xl font-bold mb-4">International Motorcoach Group (IMG)</h1>
          <p>
            Hampton Jitney is a member of The International Motorcoach Group (IMG). IMG was formed in 1998, as a group of independent charter bus rental companies working together to form a North American network of operators that shared a commitment to excellence in customer service, safety, training, and maintenance.
          </p>
          <p>
            As an invitation-only organization, IMG has grown to 54 companies who range in size, region and reflect a range of business models.
          </p>
          <p>
            From bus charter, luxury motorcoaches, limousines, school buses, shuttles, IMG coach charter companies offer a wide range and selection of charter bus rental vehicles to meet your transportation needs.
          </p>
          <p>
            With over 7,000 vehicles throughout North America and carrying over 21 million passengers, our customers have come to rely on IMG with confidence.
          </p>
          <p>
            IMG companies have a reputation for being many of the most trusted transportation providers. It is our shared commitment to “Setting the Standard” that sets IMG motor coach companies apart and the first choice for so many.
          </p>
          <h2 className="text-lg font-bold mt-6">IMG Mission Statement</h2>
          <p>
            The International Motorcoach Group (IMG) is dedicated to providing premier ground transportation to each and every client through elevated standards of performance in the areas of safety, maintenance, customer service, driver training, equipment, operations, and on-road support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgPage;
