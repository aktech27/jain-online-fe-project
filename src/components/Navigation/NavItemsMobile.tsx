import { NavbarItems } from '../../types';
import MobileAuthButtons from './MobileAuthButtons';

interface PropTypes {
  navItems: NavbarItems[];
  isSelected: boolean;
  handleMobNavClick: () => void;
  toggleSelect: () => void;
}

const NavMobile = ({ navItems, isSelected, handleMobNavClick, toggleSelect }: PropTypes) => {
  return (
    <div className="block text-md xl:pl-8 fixed top-[60px] w-[100vw] md:w-[65vw] h-[100vh] bg-black/85 right-0 z-10">
      <ul className="flex flex-col items-center font-medium p-0 border-gray-100 rounded-lg space-x-6 rtl:space-x-reverse mt-0 border-0">
        {navItems.map((navItem) => (
          <>
            <li
              key={navItem.id}
              onClick={navItem.hasDropdown ? toggleSelect : handleMobNavClick}
              className="relative w-[90%] flex flex-col items-center h-[60px] m-0 last:border-b-0 border-b-1 border-white"
            >
              <a
                href={`#${navItem.itemId}`}
                onClick={handleMobNavClick}
                className="flex items-center transition-all duration-300 rounded-sm border-0 hover:text-blue-500 p-6 h-[50%] hover:bg-black/40 hover:scale-115"
              >
                {navItem.item}
              </a>
            </li>
            {navItem.hasDropdown && isSelected && (
              <>
                {navItem.subNavItems!.map((subNavItem) => (
                  <li key={subNavItem.id} className="relative flex flex-col items-center h-[60px] m-0">
                    <a href="#packages" className="flex items-center transition-all duration-300 rounded-sm border-0 hover:text-blue-500 p-6 h-[50%] hover:bg-black/40 hover:scale-115">
                      {subNavItem.item}
                    </a>
                  </li>
                ))}
              </>
            )}
          </>
        ))}
      </ul>
      <MobileAuthButtons handleMobNavClick={handleMobNavClick} />
    </div>
  );
};

export default NavMobile;
