import React from 'react'

export const RequisitosCard = ({titulo, imagen}) => {


  return (
    <div className="flex justify-center mt-5 gap-8 mb-5">
      <div className="w-48 h-[170px] bg-white rounded-[20px] shadow-xl shadow-gray-400 border-2 border-white">
        <div className="">
          <img className="mx-auto mt-5 w-[90px] h-[70px]" src={imagen} />
          <p className="text-xl font-bold mt-2 text-center text-text-blue font-['Roboto, sans_serif']">
            {titulo}
          </p>
        </div>
      </div>
    </div>
  );
};
