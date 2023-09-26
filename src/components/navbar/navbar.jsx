import React from 'react';
import logoS from '../../assets/logoSVG.png';
import logoAzul from '../../assets/logo_azul.png';
import { HomeButton } from '../HomeButton/HomeButton';

export const Navbar = () => {
  return (
    <div className="fadeIn fixed top-0 w-full items-center">
      <nav
        className="flex items-center justify-between px-5 mb-10 mx-[40px] my-[20px] "
        style={{
          background: 'rgba(22, 40, 78, 0.60)',
          borderRadius: 20,
          backdropFilter: 'blur(2px)',
        }}
      >
        <div className="logo">
          <img
            className="w-48 h-24 px-3 pb-3 pt-1"
            src={logoAzul}
            alt="logo de etiquetalo "
          />
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
          <li className="-mt-1">
            <HomeButton titulo={'Contactanos'} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
