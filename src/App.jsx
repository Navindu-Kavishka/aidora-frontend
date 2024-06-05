


import './components/Admin/SideBar/SideBar.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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


import OngoingProject from './pages/OngoingProject';
import CompletedProject from './pages/CompletedProject';
import CanceledProject from './pages/CanceledProject';



import FundLogin from './pages/FundLogin/FundLogin'
import FundRegister from './pages/FundRegister/FundRegister'
import SideBar from './layouts/SideBar/SideBar'
import FundDashboard from './pages/FundDashboard/FundDashboard'
import CreateProject from './pages/CreateProject/CreateProject'
import EditProfile from './pages/EditProfile/EditProfile'
import Navigation from './layouts/Navigation/Navigation'




const App = () => {
  return (
    <>
    <BrowserRouter>
    
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


      <Route path='/OngoingProject' element={<OngoingProject/>}/>
      <Route path='/CompletedProject' element={<CompletedProject/>}/>
      <Route path='/CanceledProject' element={<CanceledProject/>}/>
     



      <Route path="/login" element={<FundLogin/>}></Route>
      <Route path="/register" element={<FundRegister/>}></Route>
      <Route path="/sidebar" element={<SideBar/>}></Route>
      <Route path="/dashboard" element={<FundDashboard/>}></Route>
      <Route path="/create" element={<CreateProject/>}></Route>
      <Route path="/edit" element={<EditProfile/>}></Route>
      <Route path="/navigation" element={<Navigation/>}></Route>

      
    </Routes>
    
    </BrowserRouter>


</>

  );
};
export default App


