import React from 'react';

export const InfoButton = ({ titulo }) => {
  return (
    <div className="w-[3rem] h-5 bg-blue-gray-600 rounded-md hover:bg-gray-300 grid items-center">
      <a
        className="text-[#16284E] text-sm font-medium font-['Roboto', 'sans_serif'] grid items-center"
      >
        {titulo}
      </a>
    </div>
  );
};
