import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const RequestQuote = () => {
  const location = useLocation();
  return (
    <div style={{ overflow: 'hidden' }}>
      <nav className="text-white mt-0.5">
        <Navbar />
      </nav>
      <div className="flex bg-custom-image bg-cover">
        <div className="w-[25%] bg-gray-200">
          <Sidebar disableRequestQuote={location.pathname === '/request-a-quote'} />
        </div>
        <div className="w-[75%]">
          <iframe
            src="https://hamptonjitney.thebusnetwork.com/?q=/book-a-vehicle/&;initialWidth=1920"
            width="100%"
            style={{ height: '680px', border: 'none' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
