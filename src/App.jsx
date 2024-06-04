
import './components/Admin/SideBar/SideBar.css';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import AdminDonor from "./pages/AdminDonor/AdminDonor";
import AdminFundraiser from "./pages/AdminFundRaiser/AdminFundRaiser";
import AdminProject from "./pages/AdminProject/AdminProject";
import AdminPayment from "./pages/AdminPayment/AdminPayment";
import SideBar from "./components/Admin/SideBar/SideBar"

const App = () => {
  return (
    <BrowserRouter>
    <SideBar>
    <Routes>
      <Route path='/' element={<AdminDashboard/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/admindonor' element={<AdminDonor/>}/>
      <Route path='/adminfundraiser' element={<AdminFundraiser/>}/>
      <Route path='/adminproject' element={<AdminProject/>}/>
      <Route path='/adminpayment' element={<AdminPayment/>}/>

      
    </Routes>
    </SideBar>
    </BrowserRouter>
  );
};
export default App