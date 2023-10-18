import React from 'react';

export const RequisitosCard = ({ titulo, imagen }) => {
  return (
    <div className="flex justify-center mt-8 gap-[6.68rem] mb-5 rounded-t-[1.25rem]">
      <div className="w-48 sm:h-[10.625rem] bg-white rounded-[1.25rem] shadow-xl shadow-gray-400 border-2 border-white h-[5.4rem]">
        <div className="">
          <img
            className="mx-auto sm:mt-5 sm:w-[5.625rem] sm:h-[4.375rem] w-[2.4rem] h-[3rem] mt-0"
            src={imagen}
          />
          <p className="sm:text-xl font-bold sm:mt-2 text-center text-text-blue font-['Roboto, sans_serif'] text-xs mt-0">
            {titulo}
          </p>
        </div>
      </div>
    </div>
  );
};
