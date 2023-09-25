import React from 'react'

export const HomeButton = ({titulo}) => {
  return (
    <div className="fadeIn w-40 h-10 rounded-full border-2 border-blue-400 flex align-items justify-center hover:bg-[#3D799E] ">
      <a className="text-white text-lg font-bold font-['Roboto', 'sans_serif'] flex align-items justify-center pt-1" href="#">{titulo}</a>
    </div>
  )
}
