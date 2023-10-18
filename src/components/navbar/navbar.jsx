import React from 'react';
import logoAzul from '../../assets/logo_azul.png';
import { HomeButton } from '../HomeButton/HomeButton';
import './navbar.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fadeIn fixed top-0 sm:w-full items-center">
      <nav
        className="flex items-center justify-between px-16 mb-10 mx-1 sm:mx-10 my-[1.25rem] sm:h-auto"
        style={{
          background: 'rgba(22, 40, 78, 0.60)',
          borderRadius: 20,
          backdropFilter: 'blur(0.125rem)',
        }}
      >
        <div className="logo">
          <img
            className="w-full sm:w-48 h-24 sm:mx-auto sm:px-3 pb-3 pt-1"
            src={logoAzul}
            alt="logo de etiquetalo "
          />
        </div>

        <div className="sm:hidden">
          <button className="text-white text-2xl ml-4 p-4" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } sm:flex justify-center font-semibold sm:py-2 py-3 sm:px-2 gap-8 lg:flex-wrap md:flex-wrap sm:flex-wrap sm:h-auto`}
        >
          <li
            onClick={() => scrollToSection('productos')}
            className=" text-white text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado pt-2 sm:pt-2"
          >
            Nuestros productos
          </li>
          <li
            onClick={() => scrollToSection('servicios')}
            className=" text-white text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado pt-6 sm:pt-2 "
          >
            Tipos de etiquetas
          </li>
          <li
            onClick={() => scrollToSection('porque-elegirnos')}
            className="text-white text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado pt-6 sm:pt-2 "
          >
            ¿Por qué elegirnos?
          </li>
          <li onClick={() => scrollToSection('form')} className="-mt-1 pt-6 sm:pt-2">
            <HomeButton titulo={'Contáctanos'} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
