import { createContext } from 'react';
import { AuthContextState, IAuthContext, ModalContextStateTypes } from '../types';

export const ModalContext = createContext<ModalContextStateTypes>({
  isModalOpen: false,
  modalType: null,
  handleClose: () => {},
  handleOpen: () => {},
});

export const DEFAULT_AUTH_STATE: AuthContextState = {
  isLoggedIn: false,
  lastLogin: null,
  user: null,
};

export const AuthContext = createContext<IAuthContext>({ authState: DEFAULT_AUTH_STATE, dispatch: null });
