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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSelect = () => {
    setIsSelected((prev) => !prev);
  };

  const toggleOpen = () => {
    if (!isOpen) {
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
    } else {
      window.onscroll = function () {};
    }
    setIsOpen((prev) => !prev);
  };

  const handleNavSideBar = () => {
    toggleOpen();
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
          <span className="self-center text-xl md:text-lg lg:text-sm xl:text-xl font-semibold whitespace-nowrap">AK Travels</span>
        </a>
        <div onClick={handleNavSideBar} className="h-8 w-8 border-white border-1 rounded-md ml-auto">
          {!isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40">
              <rect x="5" y="10" width="30" height="3" fill="white" rx="2.5" stroke="gray" stroke-width="1" />
              <rect x="5" y="18" width="30" height="3" fill="white" rx="2.5" stroke="gray" stroke-width="1" />
              <rect x="5" y="26" width="30" height="3" fill="white" rx="2.5" stroke="gray" stroke-width="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 26 26">
              <path
                fill="white"
                d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"
              ></path>
            </svg>
          )}
        </div>
        {isOpen ? (
          <div className="block text-md xl:pl-8 fixed top-[60px] w-[100vw] md:w-[65vw] h-[100vh] bg-black/85 right-0 z-10">
            <ul className="flex flex-col items-center font-medium p-0 border-gray-100 rounded-lg space-x-6 rtl:space-x-reverse mt-0 border-0">
              {navItems.map((navItem) => (
                <>
                  <li
                    key={navItem.id}
                    onClick={navItem.hasDropdown ? toggleSelect : undefined}
                    className="relative w-[90%] flex flex-col items-center h-[60px] m-0 last:border-b-0 border-b-1 border-white"
                  >
                    <a href="#" className="flex items-center transition-all duration-300 rounded-sm border-0 hover:text-blue-500 p-6 h-[50%] hover:bg-black/40 hover:scale-115">
                      {navItem.item}
                    </a>
                  </li>
                  {navItem.hasDropdown && isSelected && (
                    <>
                      {navItem.subNavItems!.map((subNavItem) => (
                        <li key={subNavItem.id} className="relative flex flex-col items-center h-[60px] m-0">
                          <a href="#" className="flex items-center transition-all duration-300 rounded-sm border-0 hover:text-blue-500 p-6 h-[50%] hover:bg-black/40 hover:scale-115">
                            {subNavItem.item}
                          </a>
                        </li>
                      ))}
                    </>
                  )}
                </>
              ))}
            </ul>
          </div>
        ) : null}
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
