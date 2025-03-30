import { useContext } from 'react';
import { ModalContext } from '../../context';

const RegisterButton = () => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <button
      onClick={() => handleOpen('REGISTER')}
      type="button"
      className="w-30 transition-all duration-300 text-blue-700 bg-gradient-to-r from-slate-50 to-blue-200 hover:bg-gradient-to-bl hover:scale-105 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
    >
      Register
    </button>
  );
};

export default RegisterButton;
