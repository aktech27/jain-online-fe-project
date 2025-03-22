import LoginButton from '../General/LoginButton';
import RegisterButton from '../General/RegisterButton';

const MobileAuthButtons = ({ handleMobNavClick }: { handleMobNavClick: () => void }) => {
  return (
    <div onClick={handleMobNavClick} className="flex flex-row gap-6 mx-auto p-4 justify-between">
      <RegisterButton />
      <LoginButton />
    </div>
  );
};

export default MobileAuthButtons;
