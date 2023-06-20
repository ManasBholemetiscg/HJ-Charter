import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="uppercase flex flex-wrap h-10 w-[100%] bg-green-900 flex w-full overflow-y-auto">
      <Link to='/about-us'className=' py-2 border border-600-white text-center flex-auto'>ABOUT US</Link>
      <Link to='/vehiclefleet'className=' py-2 px-2 border border-600-white flex-auto text-center'>VEHICLE FLEET</Link>
      <Link to='/corporate-private-athletic-groups' className=' py-2 px-2 border border-600-white flex-auto text-center'>CORPORATE, PRIVATE, & ATHLETIC GROUPS</Link>
      <Link to='/wedding' className=' py-2 px-2 border border-600-white flex-auto text-center'>WEDDING</Link>
      <Link to='/school-groups' className=' py-2 px-2 border border-600-white flex-auto text-center'> SCHOOL GROUPS</Link>
      <Link to='/custom-group-tours' className=' py-2 px-2 border border-600-white flex-auto text-center'>CUSTOM GROUP TOURS</Link>
      <Link to='/IMG'className=' py-2 px-2 border border-600-white flex-auto text-center'>IMG</Link>
    </div>
  );
};

export default Navbar;