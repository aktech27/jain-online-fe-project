import { useContext } from 'react';
import { ModalContext } from '../../context';

const LoginButton = () => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <button
      onClick={() => handleOpen('LOGIN')}
      type="button"
      className="w-30 transition-all duration-300 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:bg-gradient-to-bl hover:scale-105 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
    >
      Login
    </button>
  );
};

export default LoginButton;
