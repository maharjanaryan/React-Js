import './App.css'
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import AboutUs from './pages/aboutus';
import CafeGallery from './pages/CafeGallery';




function App() {

  return (
    <div>

      <BrowserRouter>
      <Routes>

       {/* <Route path="/data" element={<Student/>} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/gallery" element={<CafeGallery />} />


      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App
