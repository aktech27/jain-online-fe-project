import { useContext, useEffect } from 'react';
import { ModalContext } from '../../context';

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isModalOpen, handleClose } = useContext(ModalContext);

  useEffect(() => {
    if (isModalOpen) {
      document.querySelector('body')!.style.overflow = 'hidden';
    } else {
      document.querySelector('body')!.style.overflow = 'auto';
    }
    return () => {
      document.querySelector('body')!.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className={`fixed z-15 inset-0 flex justify-center items-center transition-colors ${isModalOpen ? 'visible bg-black/20' : 'invisible'}`}>
      <div className={`bg-white rounded-xl shadow p-3 transition-all ${isModalOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
        <button onClick={handleClose} className="absolute top-0 right-0 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 hover:scale-105 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" />
            </g>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
