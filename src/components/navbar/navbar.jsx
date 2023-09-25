import React from 'react';
import logoS from '../../assets/logoSVG.png';
import { HomeButton } from '../HomeButton/HomeButton';

export const Navbar = () => {
  return (
    <div className="fadeIn">
      <nav className="flex items-center justify-between py-6 px-10 mb-10">
        <div className="logo">
          <img className="w-48 h-24 " src={logoS} alt="logo de etiquetalo " />
        </div>
        <ul className="flex justify-center px-6 gap-4">
          <li className="px-3 text-white text-lg font-bold font-['Roboto', 'sans_serif']">
            Nuestros Productos
          </li>
          <li className="px-3 text-white text-lg font-bold font-['Roboto', 'sans_serif']">
            Nuestros Servicios
          </li>
          <li className="px-3 text-white text-lg font-bold font-['Roboto', 'sans_serif']">
            ¿Por qué elegirnos?
          </li>
          <HomeButton titulo={'Contactanos'}></HomeButton>
        </ul>
      </nav>
    </div>
  );
};
