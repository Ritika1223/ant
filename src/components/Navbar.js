import { useState } from "react";
import { Menu, X } from 'lucide-react'; // Import the icons

import { Link } from "react-router-dom"; // For navigation


function Navbar({ setShowEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleEnquiryOpen = () => {
    setShowEnquiry(true);
    setMobileMenuOpen(false); // Close menu on mobile
  };

  return (
    <header className="w-full px-4 py-1 flex justify-between h-20 items-center z-20 relative bg-white shadow">
      <img
        src="assets/logo2.png"
        alt="ANT Logo"
        className="h-12 sm:h-10  object-contain select-none"
        draggable="false"
      />

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 ml-8">
        {["Bus Hire", "Bus Ticket", "Bus Tour"].map((item) => (
          <button
            key={item}
            onClick={handleEnquiryOpen}
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            {item}
          </button>
          
        ))}
        
        {/* Contact Us Button */}
        <Link to="/contact-us">
          <button className="text-gray-700 hover:text-blue-600 font-medium">
            Contact Us
          </button>
        </Link>
      
      </nav>

      {/* Enquiry Button */}
      <button
        onClick={handleEnquiryOpen}
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-3 rounded-full shadow ml-auto md:ml-4"
      >
        Send Enquiry
      </button>

      {/* Mobile Toggle */}
      <button
        className="md:hidden ml-4"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-4 py-2 md:hidden z-30">
          {["Bus Hire", "Bus Ticket", "Bus Tour"].map((item) => (
            <button
              key={item}
              onClick={handleEnquiryOpen}
              className="text-gray-700 hover:text-blue-600 py-2 text-left border-b"
            >
              {item}
            </button>
          ))}
           <Link to="/contact-us">
            <button className="text-gray-700 hover:text-blue-600 py-2 text-left border-b">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
