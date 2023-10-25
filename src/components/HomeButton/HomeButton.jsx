import React from 'react';

export const HomeButton = ({ titulo }) => {
  return (
    <div className="w-[10.5rem] h-10 bg-white rounded-[6.25rem] hover:bg-gray-300 ">
      <a
        className="text-[#16284E] text-lg font-medium font-['Roboto', 'sans_serif'] flex align-items justify-center sm:pt-1 p-[6px] "
      >
        {titulo}
      </a>
    </div>
  );
};
