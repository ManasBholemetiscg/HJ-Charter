import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="uppercase flex h-10 w-[100%] bg-green-900">
      <Link to='/about-us'className=' py-2 border border-600-white text-center flex-auto'>ABOUT US</Link>
      <Link to='/vehiclefleet'className=' py-2 px-2 border border-600-white flex-auto text-center'>VEHICLE FLEET</Link>
      <p className=' py-2 px-2 border border-600-white flex-auto text-center'>CORPORATE, PRIVATE, & ATHLETIC GROUPS</p>
      <p className=' py-2 px-2 border border-600-white flex-auto text-center'>WEDDING</p>
      <p className=' py-2 px-2 border border-600-white flex-auto text-center'> SCHOOL GROUPS</p>
      <p className=' py-2 px-2 border border-600-white flex-auto text-center'>CUSTOM GROUP TOURS</p>
      <Link to='/IMG'className=' py-2 px-2 border border-600-white flex-auto text-center'>IMG</Link>
    </div>
  );
};

export default Navbar;