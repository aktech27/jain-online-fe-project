import React from 'react';
import Logo from '../../assets/aktechtbg.webp';
import { NavbarItems } from '../../types';

const Navbar: React.FC = () => {
  const navItems: NavbarItems[] = [
    {
      id: 1,
      item: 'Home',
    },
    {
      id: 2,
      item: 'Book',
    },
    {
      id: 3,
      item: 'Packages',
      hasDropdown: true,
    },
    {
      id: 4,
      item: 'Services',
    },
    {
      id: 5,
      item: 'Gallery',
    },
    {
      id: 6,
      item: 'About',
    },
  ];
  return (
    <nav className="border-gray-200 bg-black/40 shadow-lg shadow-white/50 text-white">
      <div className="flex flex-wrap items-center gap-2 mx-auto px-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="AK Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">AK Travels</span>
        </a>
        <div className="block w-auto pl-8" id="navbar-dropdown">
          <ul className="flex items-center font-medium p-0 border-gray-100 rounded-lg space-x-6 rtl:space-x-reverse flex-row mt-0 border-0">
            {navItems.map((navItem) => (
              <li key={navItem.id} className={`relative ${navItem.hasDropdown ? 'group h-[60px] flex items-center' : ''}`}>
                <a href="#" className="block text-white rounded-sm border-0 hover:text-blue-400 p-0">
                  {navItem.item}
                </a>
                {navItem.hasDropdown && (
                  <div className="hidden group-hover:block hover:block absolute top-15 rounded p-2 w-50 bg-black/40">
                    <ul className="cursor-pointer">
                      <li className="m-2 hover:text-blue-400">United States</li>
                      <li className="m-2 hover:text-blue-400">France</li>
                      <li className="m-2 hover:text-blue-400">India</li>
                      <li className="m-2 hover:text-blue-400">Germany</li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-6 ml-auto mr-6">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
