import React, { useState } from 'react';
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
      subNavItems: [
        {
          id: 7,
          item: 'United States',
        },
        {
          id: 8,
          item: 'France',
        },
        {
          id: 9,
          item: 'India',
        },
        {
          id: 10,
          item: 'Germany',
        },
      ],
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

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelect = () => {
    setIsSelected((prev) => !prev);
  };

  // useEffect(() => {
  //   const closeIfDropDownOpen = () => {
  //     setIsSelected(false);
  //   };
  //   document.addEventListener('click', closeIfDropDownOpen);
  //   return () => {
  //     document.removeEventListener('click', closeIfDropDownOpen);
  //   };
  // }, []);

  return (
    <nav className="border-gray-200 bg-black/40 shadow-lg shadow-white/50 text-white">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 mx-auto px-2 min-h-[60px]">
        <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src={Logo} className="h-8" alt="AK Logo" />
          <span className="self-center text-xl md:text-lg lg:text-sm xl:text-xl font-semibold whitespace-nowrap">AK Travels</span>
        </a>
        <div className="hidden text-md md:text-sm lg:text-2md lg:block w-auto xl:pl-8" id="navbar-dropdown">
          <ul className="flex items-center font-medium p-0 border-gray-100 rounded-lg space-x-6 rtl:space-x-reverse flex-row mt-0 border-0">
            {navItems.map((navItem) => (
              <li key={navItem.id} onClick={navItem.hasDropdown ? toggleSelect : undefined} className={`relative flex items-center h-[60px] m-0 ${navItem.hasDropdown ? 'group' : ''}`}>
                <a href="#" className="flex items-center transition-all duration-300 rounded-sm border-0 hover:text-blue-500 p-6 h-[50%] hover:bg-black/40 hover:scale-115">
                  {navItem.item}
                </a>
                {navItem.hasDropdown && (
                  <div className={`${isSelected ? 'block' : 'hidden'} group-hover:block hover:block absolute top-15 rounded w-50 bg-black/40 overflow-hidden`}>
                    <ul className="cursor-pointer">
                      {navItem.subNavItems!.map((subNavItem) => (
                        <li key={subNavItem.id} className="p-4 rounded transition-all duration-300 hover:text-blue-500 hover:bg-black/40 hover:scale-110">
                          {subNavItem.item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex flex-row gap-6 ml-auto mr-6">
          <button
            type="button"
            className="w-30 transition-all duration-300 text-blue-700 bg-gradient-to-r from-slate-50 to-blue-200 hover:bg-gradient-to-bl hover:scale-105 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
          >
            Register
          </button>
          <button
            type="button"
            className="w-30 transition-all duration-300 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:bg-gradient-to-bl hover:scale-105 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
