import { useReducer } from 'react';
import { AuthContext, DEFAULT_AUTH_STATE } from '../index';
import authReducer from '../Reducers/AuthReducer';

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const init = () => {
    if (!localStorage.getItem('registeredUsers')) {
      localStorage.setItem('registeredUsers', JSON.stringify([{ name: 'Ahamed Kabeer', dob: '2000-11-27', email: 'ahamedkbr85@gmail.com', contact: '9000000000', password: 'Test@123' }]));
    }
    if (!localStorage.getItem('authUser')) {
      return {
        isLoggedIn: false,
        lastLogin: null,
        user: null,
      };
    } else {
      return {
        isLoggedIn: true,
        lastLogin: null,
        user: JSON.parse(localStorage.getItem('authUser')!),
      };
    }
  };
  const [authState, dispatch] = useReducer(authReducer, DEFAULT_AUTH_STATE, init);

  return <AuthContext.Provider value={{ authState, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
