// src/App.jsx
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

// Public pages
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import CafeGallery from './pages/CafeGallery';
import AdminOverview from './pages/adminlayout/AdminOverview';
import Layout from './pages/adminlayout/layout';
import StaffManagement from './pages/adminlayout/StaffManage';
import Analytics from './pages/adminlayout/Analytics';
import Products from './pages/adminlayout/Products.jsx';
import Report from './pages/adminlayout/Report.jsx';
import Signup from './pages/SignUp.jsx';
import Menu from './pages/Userpages/Menu.jsx';
import CartPage from './pages/Userpages/CartPage.jsx';
import { CartProvider } from "./context/CartContext"; 
import BillingPage from './pages/Userpages/BillingPage.jsx';
import Profile from './pages/Userpages/Profile.jsx';






function App() {

  return (
    <CartProvider>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<CafeGallery />} />


        {/* Admin routes */}
        <Route path="/adminlayout/layout" element={ <Layout /> }>
        
          <Route index element={<AdminOverview />} />
 
          <Route path="overview" element={<AdminOverview />} />
          <Route path="staffmanage" element={<StaffManagement />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="products" element={<Products />} />
          <Route path="report" element={<Report />} />

   
        </Route>

        {/*User*/}
        <Route path='menu' element={<Menu />} />
        <Route path='cartpage' element={<CartPage />} />
        <Route path='billingpage' element={<BillingPage />} />
        <Route path='profile' element={<Profile />} />

        

      </Routes>
    </BrowserRouter>
 </CartProvider>
  );
}

export default App;
