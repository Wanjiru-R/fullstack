import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WhatsApp  from  "./components/WhatsApp";

import HomePage from "./Pages/HomePage";
import AllRooms from "./Pages/AllRooms";
import Booking from "./Pages/Booking";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import AboutUs from "./Pages/AboutUs"
import Mpesa from "./components/Mpesa"
import Footer from "./components/Footer"
import Dashboard from "./Pages/Dashboard"
import Contact from "./Pages/Contact";
import ForgotPassword from "./components/ForgotPassword";


function App() {
  return (
    <Router>
      <div className="App">
        < Navbar/>
        
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allrooms" element={<AllRooms/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/login" element={<Login/>}/>
           <Route path="/signup" element={<SignUp/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/mpesa" element={<Mpesa/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;