
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "All Rooms", path: "/allrooms" },
    { name: "Book Now", path: "/booking" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Sign Up", path: "/signup" },
    {name: "ForgotPassword", path: "/forgotpassword"}
  ];

  return (
    <>
      
      <div className="bg-blue-900 text-white py-2 px-4 md:px-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">

          <span className="flex items-center gap-2">
            <MapPin size={18} />
            <p>Zara Homes and Villas</p>
          </span>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <span className="flex items-center gap-2">
              <Phone size={18} />
              <p>+254 742 134 656</p>
            </span>

            <span className="flex items-center gap-2">
              <Mail size={18} />
              <p>info@zarahomes.com</p>
            </span>
          </div>

        </div>
      </div>

      
      
      <nav className="bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-10">

          
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            Zara Homes
          </Link>

          
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-5">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`transition hover:text-blue-200 ${
                      location.pathname === item.path
                        ? "border-b-2 border-white pb-1"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        
        {isOpen && (
          <ul className="lg:hidden bg-blue-800 py-4 text-center space-y-4">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-1 hover:text-blue-200 ${
                    location.pathname === item.path
                      ? "font-bold text-white"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
