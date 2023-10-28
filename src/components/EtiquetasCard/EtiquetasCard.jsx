
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
        <div className='grid items-center sm:text-[16px] text-[8px] sm:px-2 px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="30" height="15" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    );


  return (  
        <div className="card md:w-[25rem] w-auto sm:h-[371px] sm:bg-transparent h-auto min-h-[200px]">
            <img src={imagen} alt="" className="card-img sm:object-cover object-contain h-full " />
            <div className='absolute bottom-0 w-full sm:h-[4rem] h-[2.1rem] bg-[#16284E] flex flex-row justify-between'>

                <h1 className="text-[#E8E8E8] text-[10px] sm:text-[16px] font-bold text-center font-['Roboto, sans_serif'] grid items-center sm:ms-9 ms-2 ">
                    {titulo}
                </h1>

                <button 
                    type='button' 
                    onClick={mostrarTarjeta} 
                    className="grid items-center sm:me-7 me-2 mb-1 font-['Roboto, sans_serif'] ">
                    <InfoButton titulo={'+info'}/>
                </button>
            </div>


            { isVisible && (

                <div className="card-body flex flex-col sm:gap-2 gap-1 ps-2 sm:ps-7 sm:h-[60%] h-auto">
                    <div className='flex flex-row mt-4 text-[#E8E8E8] justify-between'>
                        <h1 
                            className="text-[10px] sm:text-[16px] md:text-xl font-bold text-center font-['Roboto, sans_serif'] grid items-center">
                            {titulo}
                        </h1>

                        <button 
                            type='button' 
                            onClick={ocultarTarjeta} 
                            className='grid items-center sm:px-3 p-1 me-2'> 
                            <InfoButton className="" titulo={downIcon}/>
                        </button>

                    </div>

                    <div className="card-sub-title ps-2">
                        <ul className="list-disc font-['Roboto, sans_serif'] md:text-xl sm:text-[16px] font-normal text-[10px]" >
                            {lista.map((item) => (            
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <p className="card-info font-['Roboto, sans_serif'] w-full sm:mb-3 mb-1 font-normal md:text-xl sm:text-[16px] text-[10px]">
                        Aplicación: {aplicacion} 
                    </p>
                </div> 
            )}

        </div>
  )
};