import React, { useState, useEffect, useContext } from 'react';
import Logo from '../../assets/aktechtbg.webp';
import { NavbarItems } from '../../types';
import NavIcon from './NavIcon';
import NavMobile from './NavItemsMobile';
import NavItems from './NavItems';
import AuthButtons from './AuthButtons';
import Modal from '../General/Modal';
import LoginForm from '../Login/LoginForm';
import { ModalContext } from '../../context';
import RegisterForm from '../Register/RegisterForm';

const Navbar: React.FC = () => {
  const navItems: NavbarItems[] = [
    {
      id: 1,
      item: 'Home',
      itemId: 'home',
    },
    {
      id: 2,
      item: 'Book',
      itemId: 'booknow',
    },
    {
      id: 3,
      item: 'Packages',
      itemId: '',
      hasDropdown: true,
      subNavItems: [
        {
          id: 7,
          item: 'United States',
          itemId: 'packages',
        },
        {
          id: 8,
          item: 'France',
          itemId: 'packages',
        },
        {
          id: 9,
          item: 'India',
          itemId: 'packages',
        },
        {
          id: 10,
          item: 'Germany',
          itemId: 'packages',
        },
      ],
    },
    {
      id: 4,
      item: 'Services',
      itemId: 'services',
    },
    {
      id: 5,
      item: 'Gallery',
      itemId: 'gallery',
    },
    {
      id: 6,
      item: 'About',
      itemId: 'about',
    },
  ];

  const { modalType } = useContext(ModalContext);

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

  const handleMobNavClick = () => {
    window.onscroll = function () {};
    setIsOpen(false);
  };

  useEffect(() => {
    const closeIfDropDownOpen = (ev: MouseEvent) => {
      if ((ev?.target as HTMLElement)?.innerText != 'Packages') {
        setIsSelected(false);
      }
    };
    document.addEventListener('click', closeIfDropDownOpen);
    return () => {
      document.removeEventListener('click', closeIfDropDownOpen);
    };
  }, []);

  return (
    <>
      <nav className="border-gray-200 bg-black/40 shadow-lg shadow-white/50 text-white">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 mx-auto px-2 min-h-[60px]">
          <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="AK Logo" />
            <span className="self-center text-xl md:text-lg lg:text-sm xl:text-xl font-semibold whitespace-nowrap">AK Travels</span>
          </a>
          <NavIcon isOpen={isOpen} handleNavSideBar={handleNavSideBar} />
          {isOpen ? <NavMobile navItems={navItems} isSelected={isSelected} handleMobNavClick={handleMobNavClick} toggleSelect={toggleSelect} /> : null}
          <NavItems navItems={navItems} isSelected={isSelected} toggleSelect={toggleSelect} />
          <AuthButtons />
        </div>
      </nav>
      <Modal>{modalType === 'LOGIN' ? <LoginForm /> : <RegisterForm />}</Modal>
    </>
  );
};

export default Navbar;
