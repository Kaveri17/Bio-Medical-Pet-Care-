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
import Reports from './pages/Reports';

import AdminDashboard from './admin/AdminDashboard';
// import AdminCategory from '.AdminCategory';
// import AddCategory from '.AddCategory';
// import UpdateCategory from '.UpdateCategory';
// import FileUpload from '.FileUpload';
// import ExcelUpload from '.ExcelUpload';
// import VaccinesList from '.VaccinesList';
// import AddVaccine from '.AddVaccine';
// import AdminMessage from '.AdminMessage';
// import MessageView from './layout/MessageView';
// import UploadForm from '.UploadForm';
import DatePicker from './pages/CustomDatePicker';
// import SendVaccineReminder from './pages/SendVaccineReminder';
import AdminRoute from './auth/AdminRoute'
import AddVaccineForm from './admin/AddVaccineForm';
import Dashboard from './admin/Dashboard';
import AdminAnimal from './admin/AdminAnimal';
import UpdateCategory from './admin/UpdateCategory copy';
// import AdminSidebar from './layout/AdminSidebar';


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
          {/* <Route path='/vaccinenoti' element={<VaccineReminderNotification/>}/> */}
          <Route path='/reports/:id' element={<Reports/>}/>
          {/* <Route path='/vaccre' element={<SendVaccineReminder/>}/> */}
          {/* <Route path='/vaccre' element={<SendVaccineReminder/>}/> */}
         {/* <Route path="/benchmark" element={<UploadForm/>}/> */}
         <Route path='/date' element={<DatePicker/>}/>
        </Route>

        <Route path='/admin' element={<AdminRoute/>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category" element={<AdminAnimal />} />
        <Route path="add-vaccine" element={<AddVaccineForm/>} />
        <Route path="update-category/:id" element={<UpdateCategory/>} />

        {/* <Route path="category" element={<AdminCategory />} />
        <Route path="add-category" element={<AddCategory />} />
        <Route path="update-category" element={<UpdateCategory />} />
        <Route path="add-vaccine" element={<AddVaccine />} />
        <Route path="vaccines" element={<VaccinesList />} />
        <Route path="fileupload" element={<FileUpload />} />
        <Route path="excel" element={<ExcelUpload />} />
        <Route path="adminmessage" element={<AdminMessage />} />
        <Route path="messageview/:id" element={<MessageView />} />
        <Route path="benchmark" element={<UploadForm />} /> */}
        
        </Route>

      </Routes>
    </Router>
  );
};

export default MyRoutes;
