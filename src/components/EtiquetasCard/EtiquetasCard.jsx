
import React from 'react'
import { useState } from 'react';
import './EtiquetasCard.css'
import {MdOutlineExpandCircleDown} from 'react-icons/md';
import { InfoButton } from '../InfoButton/InfoButton';


export const EtiquetasCard = ({titulo, imagen, aplicacion, lista}) => {

    const [isVisible, setIsVisible] = useState(false);

    const mostrarTarjeta = () => {
      setIsVisible(true);
    };
  
    const ocultarTarjeta = () => {
      setIsVisible(false);
    };
  

    const downIcon = (
        <div className='grid items-center text-xs px-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="15" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    );


  return (  
        <div className="card md:w-[25rem] w-auto">
            <img src={imagen} alt="" className="card-img" />
            <div className='absolute bottom-0 w-full h-[4rem] bg-[#16284E] flex flex-row justify-between'>

                <h1 className=" text-[#E8E8E8] sm:text-base font-bold  text-center font-['Roboto, sans_serif'] grid items-center ms-9 text-[0.75rem]">
                    {titulo}
                </h1>

                <button 
                    type='button' 
                    onClick={mostrarTarjeta} 
                    className='grid items-center sm:me-7 me-4 sm:text-base text-[0.75rem]'>
                    <InfoButton titulo={'+info'}/>
                </button>
            </div>


            { isVisible && (

                <div className="card-body flex flex-col gap-3 ps-9 sm:h-[60%] h-auto">
                    <div className='flex flex-row mt-4 text-[#E8E8E8] justify-between'>
                        <h1 
                            className="sm:text-base font-bold text-center font-['Roboto, sans_serif'] grid items-center text-[0.75rem]">
                            {titulo}
                        </h1>

                        <button 
                            type='button' 
                            onClick={ocultarTarjeta} 
                            className='grid items-center px-3'> 
                            <InfoButton className="" titulo={downIcon}/>
                        </button>

                    </div>

                    <div className="card-sub-title ps-4">
                        <ul className="list-disc font-['Roboto, sans_serif'] sm:text-base font-normal text-[0.75rem]" >
                            {lista.map((item) => (            
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <p className="card-info w-full mb-3 text-base font-normal">
                        Aplicación: {aplicacion} 
                    </p>
                </div> 
            )}

        </div>
  )
};