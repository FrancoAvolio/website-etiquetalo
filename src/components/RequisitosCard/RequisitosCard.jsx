import React from 'react'

export const RequisitosCard = ({titulo, imagen}) => {


  return (
    <div className="flex justify-center mt-5 gap-8 mb-5 rounded-t-[1.25rem]">
      <div className="w-48 h-[10.625rem] bg-white rounded-[1.25rem] shadow-xl shadow-gray-400 border-2 border-white">
        <div className="">
          <img className="mx-auto mt-5 w-[5.625rem] h-[4.375rem]" src={imagen} />
          <p className="text-xl font-bold mt-2 text-center text-text-blue font-['Roboto, sans_serif']">
            {titulo}
          </p>
        </div>
      </div>
    </div>
  );
};
