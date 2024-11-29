import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Layout from './components/Layout';
import About from './pages/About'; 
// import Animals from './pages/Animals'; 
import Contact  from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './pages/ResetPassword';
import Animal from './pages/Animals';
import Animals from './pages/Animals';
import AnimalDetail from './pages/AnimalDetail';
import HealthTrack from './pages/HealthTrack';
import ReportTrack from './pages/ReportTrack';
import VaccinationReport from './pages/VaccinationReport';
// import Login from './pages/Login'; 
// import Register from './pages/Register'; 

const MyRoutes= () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail/>} />
        <Route path="/animals" element={<Animals/>} />
        <Route path="/animaldetail" element={<AnimalDetail/>} />
        <Route path="/healthtrack" element={<HealthTrack/>} />
        <Route path="/reporttrack" element={<ReportTrack/>} />
        <Route path="/vaccination" element={<VaccinationReport/>} />
        
        </Route>
        {/* <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
};

export default MyRoutes;
