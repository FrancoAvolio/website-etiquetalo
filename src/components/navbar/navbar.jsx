import React from 'react';
import logoAzul from '../../assets/logo_azul.png';
import { HomeButton } from '../HomeButton/HomeButton';
import './navbar.css';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const isMobileView = window.innerWidth <= 640;
  const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 640) {
          setMenuOpen(false);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fadeIn fixed top-0 sm:w-full w-auto items-center">
      <nav
        className={`flex items-center justify-between px-3 sm:px-1 mb-10 mx-0 sm:mx-10 my-[1.25rem] sm:h-auto ${
          menuOpen ? 'fadeIn' : ''
        }`}
        style={{
          background: 'rgba(22, 40, 78, 0.60)',
          borderRadius: 20,
          backdropFilter: 'blur(0.125rem)',
        }}
      >
        <div className="logo flex items-center p-4 sm:p-0 mx-auto sm:mx-0 w-auto">
          <div className="sm:hidden w-full">
            {menuOpen ? (
              <button
                className="text-white text-xl p-0 translate-x-64 -translate-y-16 fadeIn"
                onClick={toggleMenu}
              >
                X
              </button>
            ) : (
              <button
                className="text-white text-2xl -ml-3 p-4"
                onClick={toggleMenu}
              >
                <div className="w-[54px] h-[45px] relative mt-5">
                  <div className="w-[35px] h-[0px] left-0 top-0 absolute border-2 border-gray-200"></div>
                  <div className="w-[54px] h-[0px] left-0 top-[13px] absolute border-2 border-gray-200"></div>
                  <div className="w-[35px] h-[0px] left-5 top-[26px] absolute border-2 border-gray-200"></div>
                </div>
              </button>
            )}
          </div>
          {(!menuOpen || !isMobileView) && (
            <img
              className="w-full sm:w-48 h-24 sm:h-24 sm:mx-auto sm:px-3 pb-3 pt-1 ml-12"
              src={logoAzul}
              alt="logo de etiquetalo"
            />
          )}
        </div>

        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } fadeIn sm:flex flex sm:flex-row flex-col justify-start -translate-x-4 sm:-translate-x-0 mx-12 sm:mx-0 font-semibold sm:py-2 py-2 sm:px-2 sm:gap-8 lg:flex-wrap md:flex-wrap sm:flex-wrap sm:h-auto`}
        >
          <li
            onClick={() => scrollToSection('productos')}
            className=" text-white text-md sm:text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado pt-1 sm:pt-2"
          >
            Nuestros productos
          </li>
          <li
            onClick={() => scrollToSection('servicios')}
            className=" text-white text-md sm:text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado pt-4 sm:pt-2"
          >
            Tipos de etiquetas
          </li>
          <li
            onClick={() => scrollToSection('porque-elegirnos')}
            className="text-white text-md sm:text-lg font-semibold font-['Roboto', 'sans_serif'] subrayado pt-4 sm:pt-2"
          >
            ¿Por qué elegirnos?
          </li>
          <li onClick={() => scrollToSection('form')} className="pt-4 sm:pt-2">
            <HomeButton titulo={'Contáctanos'} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
