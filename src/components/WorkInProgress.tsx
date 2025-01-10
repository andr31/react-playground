import React from 'react';
import { FaTools } from 'react-icons/fa';

const WorkInProgress: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md">
      <FaTools size={32} className="text-gray-500 mb-2" />
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Work in Progress</h1>
      <p className="text-sm text-gray-600">We are working hard to bring you the best experience. Stay tuned!</p>
    </div>
  );
};

export default WorkInProgress;
