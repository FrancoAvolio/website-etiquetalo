import React from 'react'
import './HomeCard.css'

export const HomeCard = ({titulo, imagen}) => {
  return (
    <div className='mt-8'>
      <div className="fadeIn sm:w-52 sm:h-44 bg-[#16284E] rounded-2xl grid place-items-center w-[6.5rem] h-[5.5rem] ">
        <div className="sm:w-48 sm:h-40 rounded-2xl border-2 border-white flex flex-col w-[6rem] h-[5rem]">
          <div className='mt-2 flex items-center align-items justify-center'>
            <img className='sm:w-20 sm:h-20 logo w-[2.5rem] h-[2.5rem]' src={imagen} alt="logo de etiquetalo " />
          </div>
          <div className="sm:h-9 sm:px-1 text-center text-white sm:text-xl font-medium font-['Roboto', 'sans_serif'] text-[10px] leading-3">{titulo}</div>
        </div>
      </div>
    </div>
  )
};
