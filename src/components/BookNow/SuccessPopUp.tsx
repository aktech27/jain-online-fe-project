import React from 'react';
import { SuccessPopUpPropTypes } from '../../types';

const SuccessPopUp: React.FC<SuccessPopUpPropTypes> = ({ closePopUp }) => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black/50">
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-md p-4 rounded-2xl bg-white shadow-2xl shadow-amber-50 relative flex flex-col items-center justify-around">
          <button
            onClick={closePopUp}
            className="text-gray-700 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-600 hover:text-gray-300 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center cursor-pointer transition-all duration-300 ease-in-out"
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="w-12 h-12 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-3.5 mt-4.5">
            <svg aria-hidden="true" className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div className="m-4">
            <div className="text-center text-xl font-bold mb-1">Your Booking is Successful</div>
            <div className="text-center text-lg text-gray-500">Happy Journey !</div>
          </div>
          <button onClick={closePopUp} className="w-20 bg-blue-500 text-white rounded p-2 hover:bg-blue-600 cursor-pointer m-4">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopUp;
