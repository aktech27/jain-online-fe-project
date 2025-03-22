import React from 'react';

const NavIcon: React.FC<{ isOpen: boolean; handleNavSideBar: () => void }> = ({ isOpen, handleNavSideBar }) => {
  return (
    <div onClick={handleNavSideBar} className="h-8 w-8 border-white border-1 rounded-md ml-auto lg:hidden">
      {!isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40">
          <rect x="5" y="10" width="30" height="3" fill="white" rx="2.5" stroke="gray" strokeWidth="1" />
          <rect x="5" y="18" width="30" height="3" fill="white" rx="2.5" stroke="gray" strokeWidth="1" />
          <rect x="5" y="26" width="30" height="3" fill="white" rx="2.5" stroke="gray" strokeWidth="1" />
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
  );
};

export default NavIcon;
