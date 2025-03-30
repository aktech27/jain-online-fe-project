import { useContext } from 'react';
import LoginButton from '../General/LoginButton';
import RegisterButton from '../General/RegisterButton';
import { AuthContext } from '../../context';
import LogoutButton from '../General/LogoutButton';

const MobileAuthButtons = ({ handleMobNavClick }: { handleMobNavClick: () => void }) => {
  const { authState } = useContext(AuthContext);
  return (
    <div onClick={handleMobNavClick} className="flex flex-row gap-6 mx-auto p-4 justify-between">
      {!authState.isLoggedIn ? (
        <>
          <RegisterButton />
          <LoginButton />
        </>
      ) : (
        <LogoutButton />
      )}
    </div>
  );
};

export default MobileAuthButtons;
