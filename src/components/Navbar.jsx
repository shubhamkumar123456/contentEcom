
import React, { useContext, useState } from "react";
import cartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
      let store = useContext(cartContext)
      let ctx = useContext(UserContext)
    
   
    const handleSearchChange = (e)=>{
      // console.log(e.target.value)
      store.setSearchText(e.target.value.toLowerCase())
    }

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setSearchOpen(!isSearchOpen);


  const handleLogOut = () =>{
    localStorage.removeItem('ecomLogin');
    ctx.setUser({name:'',email:'',login:false})
  }
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              EcomSite
            </Link>
          </div>

          {/* Search Bar for Desktop */}
          <div className="hidden md:flex items-center flex-grow mx-4">
            <input
            onChange={handleSearchChange}
              type="text"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search for products..."
            />
          </div>

          {/* Right Side: User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Login
            </Link>
            <Link to="/register" className="px-3 py-2 bg-blue-600 text-sm font-medium text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </Link>

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                id="user-menu-button"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/32"
                  alt="User Avatar"
                />
              </button>

              {/* Dropdown Items */}
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Search Button for Mobile */}
            <button onClick={toggleSearch} className="text-gray-700 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16l4-4m0 0l4-4m-4 4H4"
                />
              </svg>
            </button>

            {/* Hamburger Menu */}
            <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <input
          onChange={handleSearchChange}
            type="text"
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search for products..."
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            Home
          </Link>
          <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
            Login
          </Link>
          <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            Sign Up
          </Link>
          <button className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            Logout
          </button>
          <Link
            to="/logout"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
