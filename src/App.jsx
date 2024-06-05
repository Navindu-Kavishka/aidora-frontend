

import './components/Admin/SideBar/SideBar.css';
import { BrowserRouter, Route ,Router,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing pages
import UserLogin from "./pages/UserLogin/UserLogin";
import HomePage from "./pages/HomePage/HomePage"
import RegisterPage from './pages/RegisterPage/RegisterPage';
import UserProfile from './pages/UserProfile/UserProfile';
import AboutUs from './pages/AboutUs/AboutUs';


import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminDonor from "./pages/AdminDonor/AdminDonor";
import AdminFundraiser from "./pages/AdminFundRaiser/AdminFundRaiser";
import AdminProject from "./pages/AdminProject/AdminProject";
import AdminPayment from "./pages/AdminPayment/AdminPayment";
import SideBar from "./components/Admin/SideBar/SideBar"



import Payinvoice from './pages/Payinvoice/payinvoice';
import Paypal from './pages/Paypal/paypal';
import DonationRecipt from './pages/DonationRecipt/dRecipt';
import MakeDonation from './pages/MakeDonation/mDonation';
import DonationHome from './pages/DonationHome/CharityPage';
import Homemiddle from './pages/Homemiddle/ProgressBar';




const App = () => {
  return (
    <>
    <BrowserRouter>
    <SideBar>
    <Routes>
    
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
    
    
    
      <Route path='/' element={<AdminDashboard/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/admindonor' element={<AdminDonor/>}/>
      <Route path='/adminfundraiser' element={<AdminFundraiser/>}/>
      <Route path='/adminproject' element={<AdminProject/>}/>
      <Route path='/adminpayment' element={<AdminPayment/>}/>

      
    </Routes>
    </SideBar>
    </BrowserRouter>

    <Router>
    <Routes>
      
      <Route path="/PayInvoice" element={<Payinvoice />} />
      <Route path="/Paypal" element={<Paypal />} />
      <Route path="/DonationRecipt" element={<DonationRecipt />} />
      <Route path="/MakeDonation" element={<MakeDonation />} />
      <Route path="/DonationHome" element={<DonationHome />} />
      <Route path="/Homemiddle" element={<Homemiddle />} />


    </Routes>
  </Router>

    </>
  );
};
export default App

