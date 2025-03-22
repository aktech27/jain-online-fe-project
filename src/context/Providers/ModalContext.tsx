import React, { useState } from 'react';
import { ModalContext } from '../index';
import { ModalType } from '../../types';

const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const handleClose = () => {
    setIsModalOpen(false);
    setModalType(null);
  };
  const handleOpen = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return <ModalContext.Provider value={{ isModalOpen, modalType, handleClose, handleOpen }}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
