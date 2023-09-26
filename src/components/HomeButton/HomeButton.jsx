import React from 'react';

export const HomeButton = ({ titulo }) => {
  return (
    <div className="w-[168px] h-10 bg-white rounded-[100px] hover:bg-gray-300 ">
      <a
        className="text-[#16284E] text-lg font-medium font-['Roboto', 'sans_serif'] flex align-items justify-center pt-1"
        href="#"
      >
        {titulo}
      </a>
    </div>
  );
};
