import React from 'react'
import Fondo from '../../assets/fondoFooter.png';
import Logo from '../../assets/logo_azul.png';
import {BsFacebook, BsLinkedin, } from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='relative w-full h-[37rem]'>
        <div className='grid items-center'>
            <img 
                className='absolute inset-0 w-full h-full' 
                src={Fondo} alt="" 
            />
            
            <div className='absolute inset-0 flex flex-col items-center justify-center w-full md:h-[60rem] h-auto gap-7'>

                <img 
                    className='h-auto'
                    src={Logo} 
                    alt="Logo" 
                />   

                <div className='text-[#24485E] font-medium text-2xl'>info@etiquetalo.com.ar</div>

                <div className='text-[#24485E] font-medium text-2xl'>www.etiquetalo.com.ar</div>

                <div className='flex gap-4 mt-[3rem]'>
                    <BsFacebook className='sm:w-[3rem] sm:h-[3rem] text-[#16284E] hover:scale-105 duration-75 w-auto h-auto'/><a href=""></a>
                    <FaInstagramSquare className='sm:w-[3rem] sm:h-[3rem] text-[#16284E] hover:scale-105 duration-75 w-auto h-auto'/><a href=""></a>
                    <BsLinkedin className='sm:w-[3rem] sm:h-[3rem] text-[#16284E] hover:scale-105 duration-75 w-auto h-auto'/><a href=""></a>
                </div>

            </div>
        </div>

    </div>
  )
}
