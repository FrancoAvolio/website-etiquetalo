import React from 'react'
import './RequisitosCard.css'

export const RequisitosCard = ({titulo, imagen}) => {


  return (
    <div className="flex justify-center mt-5 gap-8 mb-5">
        <div className="w-48 h-[170px] bg-white rounded-[20px] shadow-xl shadow-gray-400 border-2 border-white">
          <div className="">
            <img className="mx-auto mt-10" src={imagen} />
            <p className="text-xl font-bold mt-2 text-center text-[#16284E]">
              {titulo}
            </p>
          </div>
        </div>
    </div>
  )
};
