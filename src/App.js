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
import CorporatePrivateAthleticGroups from './components/corporate-private-athletic-groups';
import Wedding from './components/wedding';
import SchoolGroup from './components/schoolgroup';
import CustomGroupTours from './components/CustomGroupTours';



const App = () => {
  return (
    <Router>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about-us' element={<CharterTeam />} />
     <Route path='/vehiclefleet' element={<VehicleFleet />} />
     <Route path="/request-a-quote" element={<RequestQuote />} />
     <Route path="/IMG" element={<ImgPage/>} />
     <Route path="/corporate-private-athletic-groups" element={<CorporatePrivateAthleticGroups/>} />
     <Route path="/wedding" element={<Wedding/>} />
     <Route path="/school-groups" element={<SchoolGroup/>} />
     <Route path="/custom-group-tours" element={<CustomGroupTours/>} />
     
     {/* <Route path='/shows/:id' element={<Show />} /> */}
   </Routes>
   </Router>
  );
};

export default App;