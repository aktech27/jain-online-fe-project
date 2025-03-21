import React, { useState } from 'react';
import { ModalContext } from '../index';

const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return <ModalContext.Provider value={{ isModalOpen, handleClose, handleOpen }}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
