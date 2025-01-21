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
import AdminDashboard from './admin/AdminDashboard';

import MessageView from './layout/MessageView';
import AdminMessage from './admin/AdminMessage';
import Dashboard from './admin/Dashboard';
import VaccinesList from './admin/VaccinesList';
import AddVaccine from './admin/AddVaccine';
import Reports from './pages/Reports';

// import AddCategory from './admin/AddCategory';
// import Dashboard from "./admin/Dashboard"; 
import AddCategory from './admin/AddCategory';
import AdminCategory from './admin/AdminCategory';
import UpdateCategory from './admin/UpdateCategory';
import FileUpload from './admin/FileUpload';
import ExcelUpload from './admin/ExcelUpload';

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
          <Route path='/reports' element={<Reports/>}/>

          <Route path="/admin/dashboard" element={<Dashboard/>} /> 
          <Route path="/admin/category" element={<AdminCategory/>} /> 
          <Route path="/admin/add-category" element={<AddCategory />} />
          <Route path="/admin/add-vaccine" element={<AddVaccine />} />
          <Route path="/admin/update-category" element={<UpdateCategory />} />
          <Route path="/fileupload" element={<FileUpload />} />
          <Route path="/vaccines" element={<VaccinesList />} />
          <Route path="/excel" element={<ExcelUpload />} />
        </Route>

         {/* Admin */}
         <Route path="/admin/add-vaccine" element={<AddVaccine />} />
          <Route path="/adminmessage" element={<AdminMessage/>}/>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}>
          <Route path="/admin/dashboard" element={<Dashboard/>} />
  
        



          </Route>
                   
          <Route path="/messageview/:id" element={<MessageView/>}/>
          <Route path="/vaccines" element={<VaccinesList />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
