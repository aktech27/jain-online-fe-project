import React from 'react';
import { SectionHeadPropTypes } from '../../types';

const SectionHead: React.FC<SectionHeadPropTypes> = ({ title, subtitle }) => {
  return (
    <>
      <h3 className="text-center text-2xl md:text-3xl lg:text-5xl">{title}</h3>
      <h4 className="text-center text-sm md:text-3md lg:text-2xl text-gray-800 mb-4 mt-2">{subtitle}</h4>
    </>
  );
};

export default SectionHead;
