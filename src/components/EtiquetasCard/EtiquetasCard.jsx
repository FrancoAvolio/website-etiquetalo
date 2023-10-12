
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
        <div className="card">
            <img src={imagen} alt="" className="card-img" />
            <div className='absolute bottom-0 w-full h-[4rem] bg-[#16284E] flex flex-row justify-between'>

                <h1 className=" text-[#E8E8E8] text-base font-bold  text-center font-['Roboto, sans_serif'] grid items-center ms-9">
                    {titulo}
                </h1>

                <button 
                    type='button' 
                    onClick={mostrarTarjeta} 
                    className='grid items-center me-7'>
                    <InfoButton titulo={'+info'}/>
                </button>
            </div>


            { isVisible && (

                <div className="card-body flex flex-col gap-3 ps-9">
                    <div className='flex flex-row mt-4 text-[#E8E8E8] justify-between'>
                        <h1 
                            className="text-base font-bold text-center font-['Roboto, sans_serif'] grid items-center">
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
                        <ul className="list-disc font-['Roboto, sans_serif'] text-base font-normal" >
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
            {/* <div className="card-body flex flex-col gap-6 ps-12 ">
                <div className='flex flex-row mt-4 text-[#E8E8E8]'>
                    <h1 className=" text-base text-center font-['Roboto, sans_serif'] grid items-center">{titulo}</h1>
                    <div onClick={ocultarTarjeta} className='grid items-center'><div className=' text-[#E8E8E8] text-base text-center grid items-center' >-info</div></div>
                </div>
                <div className="card-sub-title">
                    <ul className="list-disc font-['Roboto, sans_serif']" >
                        {lista.map((item) => (            
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                <p className="card-info w-full mx-auto p-2">
                    Aplicación: {aplicacion} 
                </p>
            </div> */}

        </div>
  )
};