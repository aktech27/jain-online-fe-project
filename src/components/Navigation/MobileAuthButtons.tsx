import LoginButton from '../General/LoginButton';
import RegisterButton from '../General/RegisterButton';

const MobileAuthButtons = () => {
  return (
    <div className="flex flex-row gap-6 mx-auto p-4 justify-between">
      <RegisterButton />
      <LoginButton />
    </div>
  );
};

export default MobileAuthButtons;
