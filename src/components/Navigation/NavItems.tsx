import { NavbarItems } from '../../types';

interface PropTypes {
  navItems: NavbarItems[];
  isSelected: boolean;
  toggleSelect: () => void;
}

const NavItems = ({ navItems, toggleSelect, isSelected }: PropTypes) => {
  return (
    <div className="hidden text-md md:text-sm lg:text-2md lg:block w-auto xl:pl-8" id="navbar-dropdown">
      <ul className="flex items-center font-medium p-0 border-gray-100 rounded-lg space-x-6 rtl:space-x-reverse flex-row mt-0 border-0">
        {navItems.map((navItem) => (
          <li key={navItem.id} onClick={navItem.hasDropdown ? toggleSelect : undefined} className={`relative flex items-center h-[60px] m-0 ${navItem.hasDropdown ? 'group' : ''}`}>
            <a href={`#${navItem.itemId}`} className="flex items-center transition-all duration-300 rounded-sm border-0 hover:text-blue-500 p-6 h-[50%] hover:bg-black/40 hover:scale-115">
              {navItem.item}
            </a>
            {navItem.hasDropdown && (
              <div className={`${isSelected ? 'block' : 'hidden'} group-hover:block hover:block absolute top-15 rounded w-50 bg-black/40 overflow-hidden`}>
                <ul className="cursor-pointer">
                  {navItem.subNavItems!.map((subNavItem) => (
                    <li key={subNavItem.id} className="p-4 rounded transition-all duration-300 hover:text-blue-500 hover:bg-black/40 hover:scale-110">
                      <a href="#packages">{subNavItem.item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
