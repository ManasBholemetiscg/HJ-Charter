import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-green-900 px-4">
      <div className="flex flex-col ">
        <hr className="border border-white-300 mt-4 ml-14 h-px w-2/3" />
        <Link to='/'className="text-2xl font-bold text-white pt-1 text-center">
          CHARTERS
        </Link>
        <hr className="border border-white-300 ml-14 h-px w-2/3" />
        <p className="text-white w-50 mt-10 text-start pl-14">
          Hampton Jitney offers the finest <br />
          transportation services for groups
          <br />
          of every size and type.
        </p>
        <div className="text-white text-2xl w-15 text-center px-0 mt-20 border-2 border-white-600 w-[100%] rounded-lg bg-transparent font-bold">
          REQUEST A <br />
          COMPLIMENTARY
          <br /> QUOTE
        </div>
        <div className="text-white py-[30%]">
          <div className="flex flex-row">
            {" "}
           
            <div className='flex items-center justify-center border border-white-600 rounded-full w-8 h-8'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            </div>
            <p className="pl-5 pb-10">Charters@hamptonjitney.com</p>
          </div>
          <div className="flex flex-row">
            {" "}
            <div className='flex items-center justify-center border border-white-600 rounded-full w-8 h-8'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            </div>
            <p className="pl-5 pb-10">631.283.4600 ext.642</p>
          </div>
          <div className="flex flex-row">
            {" "}
            <div className='flex items-center justify-center border border-white-600 rounded-full w-8 h-8'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            </div>
            <p className="pl-5 pb-10">253 Edwards Avenue <br/>Claverton NY 11933</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
