import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import AboutUs from './pages/aboutus';
import CafeGallery from './pages/CafeGallery';
import Home from './pages/home';
import Layout from './pages/adminlayout.jsx/layout';




function App() {

  return (
    <>
  
      <BrowserRouter>
      <Routes>

       {/* <Route path="/data" element={<Student/>} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/gallery" element={<CafeGallery />} />


      <Route path="/adminlayout/layout" element={<Layout />} >





      </Route>
      </Routes>
      
      </BrowserRouter>
    </>

   
  );
}

export default App
