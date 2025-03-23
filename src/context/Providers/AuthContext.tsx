import { useReducer } from 'react';
import { AuthContext, DEFAULT_AUTH_STATE } from '../index';
import authReducer from '../Reducers/AuthReducer';

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const init = () => {
    return {
      isLoggedIn: false,
      lastLogin: null,
      user: null,
    };
  };
  const [authState, dispatch] = useReducer(authReducer, DEFAULT_AUTH_STATE, init);

  return <AuthContext.Provider value={{ authState, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
