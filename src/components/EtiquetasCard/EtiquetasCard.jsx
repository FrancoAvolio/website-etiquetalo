
import React from 'react'
import './EtiquetasCard.css'
import {MdOutlineExpandCircleDown} from 'react-icons/md';

// const seguridadCaracteristicas = ['OPP (plástica autoadhesiva).', 'Máxima durabilidad (5 años)', 'Sugerida para intemperie.', 'Impresión de máxima calidad.', 'Mayor costo.'];
// const SeguridadAplicacion = [' bienes de cambio exterior y de uso.']


export const EtiquetasCard = ({titulo, imagen, aplicacion, lista}) => {
  return (  
        <div className="card">
            <img src={imagen} alt="" className="card-img" />
            <div className='absolute bottom-0 w-full h-[4rem] bg-[#16284E] flex flex-row justify-around'>
                <h1 className=" text-[#E8E8E8] text-xl text-center font-['Roboto, sans_serif'] grid items-center">{titulo}</h1>
                <div className='grid items-center'><MdOutlineExpandCircleDown className=' text-[#E8E8E8] text-2xl text-center rotate-180 grid items-center' /></div>
            </div>
            <div className="card-body flex flex-col gap-6 ps-12 ">
                <div className='flex flex-row justify-around mt-4 text-[#E8E8E8]'>
                    <h1 className=" text-xl text-center font-['Roboto, sans_serif'] grid items-center">{titulo}</h1>
                    <div className='grid items-center'><MdOutlineExpandCircleDown className='text-2xl grid items-center' /></div>
                </div>
                <div className="card-sub-title">
                    <ul className="list-disc font-['Roboto, sans_serif']" >
                        {lista.map((item) => (            
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                <p className="card-info">
                    Aplicación: {aplicacion} 
                </p>
            </div>
        </div>
  )
};