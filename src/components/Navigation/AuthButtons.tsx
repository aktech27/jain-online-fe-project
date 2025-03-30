import { useContext } from 'react';
import LoginButton from '../General/LoginButton';
import RegisterButton from '../General/RegisterButton';
import { AuthContext } from '../../context';
import LogoutButton from '../General/LogoutButton';

const AuthButtons = () => {
  const { authState } = useContext(AuthContext);
  return (
    <div className="hidden lg:flex flex-row gap-6 ml-auto mr-6">
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

export default AuthButtons;
