import React from 'react';

export const InfoButton = ({ titulo }) => {
  return (
    <div className="w-[3rem] h-5 rounded-2xl hover:scale-[1.15] grid items-center">
      <a
        className="text-white text-sm font-medium font-['Roboto', 'sans_serif'] grid items-center"
      >
        {titulo}
      </a>
    </div>
  );
};
