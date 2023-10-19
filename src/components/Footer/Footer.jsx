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

                <div className='text-[#24485E] font-medium sm:text-2xl text-xl flex flex-wrap'>info@etiquetalo.com.ar</div>

                <div className='text-[#24485E] font-medium sm:text-2xl text-xl flex flex-wrap'>www.etiquetalo.com.ar</div>

                <div className='flex gap-4  sm:mt-[3rem] mt-2 sm:w-auto'>
                    <a href="" aria-label='Facebook Page'><BsFacebook className='sm:w-[3rem] sm:h-[3rem] text-[#16284E] hover:scale-105 duration-75 w-[2.5rem] h-[2.5rem]'/></a>
                    <a href="" aria-label='Instagram Page'><FaInstagramSquare className='sm:w-[3rem] sm:h-[3rem] text-[#16284E] hover:scale-105 duration-75 w-[2.5rem] h-[2.5rem]'/></a>
                    <a href="" aria-label='Linkedin Page'><BsLinkedin className='sm:w-[3rem] sm:h-[3rem] text-[#16284E] hover:scale-105 duration-75 w-[2.5rem] h-[2.5rem]'/></a>
                </div>

            </div>
        </div>

    </div>
  )
}
