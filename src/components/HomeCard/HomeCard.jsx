import React from 'react'
import './HomeCard.css'

export const HomeCard = ({titulo, imagen}) => {
  return (
    <div>
      <div className="fadeIn w-52 h-44 bg-[#3D799E] rounded-2xl grid place-items-center ">
        <div className="w-48 h-40 rounded-2xl border-2 border-white flex flex-col">
          <div className='mt-2 flex items-center align-items justify-center'>
            <img className='w-20 h-20 logo' src={imagen} alt="logo de etiquetalo " />
          </div>
          <div className="w-[150] h-9 text-center text-white text-xl font-medium font-['Roboto', 'sans_serif']">{titulo}</div>
        </div>
      </div>
    </div>
  )
};
