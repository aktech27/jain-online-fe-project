import { useContext } from 'react';
import { AuthContext } from '../../context';
import { AuthContextTypes } from '../../types';

const LogoutButton = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <button
      onClick={() => dispatch!({ type: AuthContextTypes.LOGOUT })}
      type="button"
      className="w-30 transition-all duration-300 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:bg-gradient-to-bl hover:scale-105 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
