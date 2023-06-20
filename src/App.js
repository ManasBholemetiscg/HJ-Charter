import React from 'react';
//import Navbar from './components/Navbar';
//import Sidebar from './components/Sidebar';
//import MainContent from './components/MainContent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CharterTeam from './pages/CharterTeam';
import Home from './pages/Home';
import VehicleFleet from './pages/VehicleFleet';
import RequestQuote from './components/RequestQuote';
import ImgPage from "./components/ImgPage";



const App = () => {
  return (
    <Router>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about-us' element={<CharterTeam />} />
     <Route path='/vehiclefleet' element={<VehicleFleet />} />
     <Route path="/request-a-quote" element={<RequestQuote />} />
     <Route path="/IMG" element={<ImgPage/>} />
     
     {/* <Route path='/shows/:id' element={<Show />} /> */}
   </Routes>
   </Router>
  );
};

export default App;