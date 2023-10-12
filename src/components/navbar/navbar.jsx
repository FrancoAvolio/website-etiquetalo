import React from 'react';
import logoAzul from '../../assets/logo_azul.png';
import { HomeButton } from '../HomeButton/HomeButton';
import './navbar.css';

export const Navbar = () => {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fadeIn fixed top-0 w-full items-center">
      <nav
        className="flex items-center justify-between px-5 mb-10 mx-10 my-[1.25rem] sm:h-auto sm:p-0 "
        style={{
          background: 'rgba(22, 40, 78, 0.60)',
          borderRadius: 20,
          backdropFilter: 'blur(0.125rem)',
        }}
      >
        <div className="logo">
          <img
            className="w-48 h-24 px-3 pb-3 pt-1"
            src={logoAzul}
            alt="logo de etiquetalo "
          />
        </div>
        <ul className="flex justify-center font-semibold px-6 gap-8 lg:flex-wrap md:flex-wrap sm:flex-wrap sm:h-auto">
          <li
            onClick={() => scrollToSection('productos')}
            className=" text-white text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado"
          >
            Nuestros productos
          </li>
          <li
            onClick={() => scrollToSection('servicios')}
            className=" text-white text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado"
          >
            Nuestros servicios
          </li>
          <li
            onClick={() => scrollToSection('porque-elegirnos')}
            className=" text-white text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado"
          >
            ¿Por qué elegirnos?
          </li>
          <li onClick={() => scrollToSection('form')} className="-mt-1">
            <HomeButton titulo={'Contáctanos'} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
