import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './pages/ResetPassword';
import Animals from './pages/Animals'; 
import AnimalDetail from './pages/AnimalDetail';
import HealthTrack from './pages/HealthTrack';
import ReportTrack from './pages/ReportTrack';
import VaccinationReport from './pages/VaccinationReport';
import SummaryReport from './pages/SummaryReport';
import VaccineReminderNotification from './pages/VaccineReminderNotification';
import AdminDashboard from './Admin/AdminDashboard';
import AdminMessage from './Admin/AdminMessage';


const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animal-detail" element={<AnimalDetail />} />
          <Route path="/healthtrack/:id" element={<HealthTrack />} />
          
          <Route path="/summaryreport" element={<SummaryReport />} />
          <Route path="/reporttrack/:id" element={<ReportTrack />} />
        
          <Route path="/vaccinationreport/:id" element={<VaccinationReport />} />
          <Route path="/animaldetail" element={<AnimalDetail />} />
          <Route path='/vaccinenoti' element={<VaccineReminderNotification/>}/>
        </Route>

         {/* Admin */}
          <Route path="/adminmessage" element={<AdminMessage/>}/>
          
          <Route path="/admin/dashboard" element={<AdminDashboard/>}>
         
          </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
