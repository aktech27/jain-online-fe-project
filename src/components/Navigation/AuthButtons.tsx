import LoginButton from '../General/LoginButton';
import RegisterButton from '../General/RegisterButton';

const AuthButtons = () => {
  return (
    <div className="hidden lg:flex flex-row gap-6 ml-auto mr-6">
      <RegisterButton />
      <LoginButton />
    </div>
  );
};

export default AuthButtons;
