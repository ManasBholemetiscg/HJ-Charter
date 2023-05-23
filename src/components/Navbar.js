import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="uppercase flex h-10 w-[100%] bg-green-900">
      <Link to='/charterteam'className=' py-2 border border-600-white text-center flex-auto'>CHARTER TEAM</Link>
      <Link to='/vehiclefleet'className=' py-2 px-2 border border-600-white flex-auto text-center'>VEHICLE FLEET</Link>
      <p className=' py-2 px-2 border border-600-white flex-auto text-center'>weddings</p>
      <p className=' py-2 px-2 border border-600-white flex-auto text-center'> school groups</p>
      <p className=' py-2 px-2 border border-600-white flex-auto text-center'>custom group tours</p>
      <p className=' py-2 px-2 border border-600-white flex-auto text-center'>black car service</p>
    </div>
  );
};

export default Navbar;