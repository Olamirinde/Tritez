import { useState } from "react";
import SearchIcon from "../assets/Group 2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#09668A]">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="text-3xl font-bold capitalize text-white">
          tritez..
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center space-x-6 text-white md:flex">
          <a href="/" className="hover:text-gray-300 hover:underline">
            Home
          </a>

          <div className="relative">
            <select
              className="bg-[#09668A] text-white hover:text-gray-300 focus:outline-none"
              name="clothes"
              id="clothes"
            >
              <option value="clothes">Clothes</option>
              <option value="clothes">T-shirts</option>
              <option value="clothes">Jeans</option>
              <option value="clothes">Jackets</option>
            </select>
          </div>

          <div className="relative">
            <select
              className="bg-[#09668A] text-white hover:text-gray-300 focus:outline-none"
              name="accessories"
              id="accessories"
            >
              <option value="accessories">Accessories</option>
              <option value="accessories">Bags</option>
              <option value="accessories">Watches</option>
              <option value="accessories">Hats</option>
            </select>
          </div>

          <a href="/contact-us" className="hover:text-gray-300 hover:underline">
            Contact Us
          </a>
        </div>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4">
          <img
            src={SearchIcon}
            alt="Search Icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <div className="relative text-white">
            <p>
              Cart
              <span className="ml-2">
                <button className="rounded-full bg-white px-2 py-1 text-black">
                  0
                </button>
              </span>
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="flex flex-col items-start space-y-4 p-4 md:hidden">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <select
            className="bg-[#09668A] text-white hover:text-gray-300 focus:outline-none"
            name="clothes"
            id="clothes"
          >
            <option value="clothes">Clothes</option>
            <option value="clothes">T-shirts</option>
            <option value="clothes">Jeans</option>
            <option value="clothes">Jackets</option>
          </select>

          <select
            className="bg-[#09668A] text-white hover:text-gray-300 focus:outline-none"
            name="accessories"
            id="accessories"
          >
            <option value="accessories">Accessories</option>
            <option value="accessories">Bags</option>
            <option value="accessories">Watches</option>
            <option value="accessories">Hats</option>
          </select>

          <a href="/contact-us" className="text-white hover:text-gray-300">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
