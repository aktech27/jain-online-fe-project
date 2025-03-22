import { createContext } from 'react';
import { ModalContextStateTypes } from '../types';

export const ModalContext = createContext<ModalContextStateTypes>({
  isModalOpen: false,
  modalType: null,
  handleClose: () => {},
  handleOpen: () => {},
});
