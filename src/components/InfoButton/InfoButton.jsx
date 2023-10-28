import React from 'react';

export const InfoButton = ({ titulo }) => {
  return (
    <div className="sm:w-[3rem] w-[2rem] h-5 rounded-2xl hover:scale-[1.15] grid items-center">
      <a
        className="text-white sm:text-[16px]  text-[8px] font-medium font-['Roboto', 'sans_serif'] grid items-center"
      >
        {titulo}
      </a>
    </div>
  );
};
