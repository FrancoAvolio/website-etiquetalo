import './index.css';
import './App.css';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Navbar } from './components/navbar/navbar';
import { HomeCard } from './components/HomeCard/HomeCard';
import { HomeButton } from './components/HomeButton/HomeButton';
import { RequisitosCard } from './components/RequisitosCard/RequisitosCard';
import { EtiquetasCard } from './components/EtiquetasCard/EtiquetasCard';
import { ElegirnosSection } from './components/ElegirnosSection/ElegirnosSection';

import ScrollButton from './components/Scroll/ScrollButton';
import Products from './components/Sections/Products';
import Form from './components/Form/Form';

import background from './assets/home-background.jpg';
import handshake from './assets/handshake.svg';
import tag_heart from './assets/tag_heart.svg';
import hands_heart from './assets/hands_heart.svg';
import headset from './assets/headset.svg';

import imageUrl from '../src/assets/ruler.svg';
import imageUrl2 from '../src/assets/etiqueta.svg';
import imageUrl4 from '../src/assets/change.svg';
import imageUrl5 from '../src/assets/tear.svg';

import Seguridad from './../src/assets/seguridad.png';
import Textil from './../src/assets/textil.png';
import PlasticaTransparente from './../src/assets/plastica.png';
import PlasticasColor from './../src/assets/plasticasColor.png';
import EconomicasColor from './../src/assets/economicasColor.png';
import EconomicasTermosensibles from './../src/assets/economicasTermosensibles.png';

const seguridadLista = [
  'OPP (plástica autoadhesiva).',
  'Máxima durabilidad (5 años)',
  'Sugerida para intemperie.',
  'Impresión de máxima calidad.',
  'Mayor costo.',
];
const textilLista = [
  'Poliamida / fasco (no autoadhesivas).',
  'Soporta el lavado.',
  'Impresión de máxima calidad.',
  'Costo medio.',
];
const plasticasTransparentesLista = [
  'OPP (plástica autoadhesivas).',
  'Máxima durabilidad (5 años).',
  'Sugerida para intemperie.',
  'Impresión de máxima calidad.',
  'Costo medio.',
];
const plasticasColorLista = [
  'OPP (plástica autoadhesivas).',
  'Máxima durabilidad (5 años).',
  'Sugerida para intemperie.',
  'Impresión de máxima calidad.',
  'Costo medio.',
];
const economicasColor = [
  'Calidad de impresión simple.',
  'NO apta para intemperie.',
  'Baja durabilidad.',
  'Bajo costo.',
];
const economicasTermosensibles = [
  'Calidad de impresión básica.',
  'NO apta para intemperie.',
  'Mínima durabilidad.',
  'Muy bajo costo.',
];

function App() {
  return (
    <div className="w-full bg-white z-30">
      <header className="relative z-30 h-[6.875rem] w-full mt-0 cursor-pointer">
        <Navbar />
        {/* <DrawerAppBar /> */}
      </header>

      <section className="relative z-20 sm:mb-20 sm:mt-[4.375rem] sm:ps-20 lg:ps-40 flex flex-col sm:flex-wrap max-sm:flex-wrap  flex-wrap h-auto ps-4 mb-10 text-xs my-10 gap-4">
        <h1 className="sm:leading-[4.125rem] sm:h-[8.438rem] mt-8 text-gray-200 sm:text-[3.75rem] font-bold font-['Roboto', 'sans_serif'] h-auto text-5xl">
          Impresión de <br />
          etiquetas a medida
        </h1>

        <p className="sm:leading-tight sm:text-lg text-white sm:text-md font-normal font-['Roboto', 'sans_serif'] text-xs">
          La etiqueta perfecta para cada producto.
        </p>

        
      </section>

      <section className="md:h-[12.5rem] sm:h-auto sm:p-5 relative z-20 flex items-center justify-center gap-5 sm:my-[1.875rem] sm:flex-wrap sh-auto flex-wrap my-5 px-7">
        <HomeCard 
          titulo={'Somos profesionales'} 
          imagen={handshake} 
        />
        <HomeCard 
          titulo={'Nos gusta lo que hacemos'} 
          imagen={tag_heart} 
        />
        <HomeCard 
          titulo={'Soluciones de calidad'} 
          imagen={hands_heart} 
        />
        <HomeCard 
          titulo={'Atentos a tus consultas'} 
          imagen={headset} 
        />
      </section>

      <div className="absolute top-0 bottom-0 h-[50rem] w-full z-10">
        <img
          src={background}
          className="absolute top-0 bottom-0 w-full z-10 h-[40.625rem]"
          alt="Vite logo"
        />
      </div>

      <div id="productos" className="relative z-20  mt-[8rem] h-full" style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 20%, #e8e8e8 83%, #ffffff 100%)',}}>
        <div className="flex items-center justify-center pt-[3.125rem]  h-full">
          <div className="text-blue-950 text-[2.5rem] font-bold font-['Roboto', sans_serif] text-[#16284E]">
            <h2>Nuestros productos</h2>
            <div className="my-[0.063rem] border-b-[0.188rem] border-[#5BB4EB] w-[21.1rem] mx-auto"></div>
          </div>
        </div>

        <section className="md:h-[26.875rem] md:w-full sm:p-5 flex items-center align-items justify-center sm:gap-[6.688rem] sm:mx-4 flex-wrap px-10 h-[400px]">
          <RequisitosCard
            titulo={'Color de base a eleccion'}
            imagen={imageUrl2}
          />

          <div className="sm:w-48 sm:h-[10.625rem] bg-white rounded-[1.25rem] shadow-xl shadow-gray-400 border-2 border-white w-[6rem] h-[5.4rem]">
            <div className="">
              <img
                className="sm:mx-auto sm:w-full sm:h-[7.5rem] w-[5rem] h-[8rem] mt-0"
                src={imageUrl4}
              />
              <p className="sm:text-xl font-bold sm:-mt-5 text-center text-text-blue font-['Roboto, sans_serif'] text-xs mt-0">
                Textiles o Autoadhesivas
              </p>
            </div>
          </div>

          <RequisitosCard titulo={'Único color de impresion'} imagen={imageUrl5} />
          <RequisitosCard titulo={'Ancho hasta 110mm'} imagen={imageUrl} />
        </section>
      </div>

      <div id="servicios" className="2sm:p-2 mt-[5rem] z-20" style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 20%, #e8e8e8 83%, #ffffff 100%)',}}>
      

        <section className="w-full h-full mt-[5rem]">
          <div className="text-center text-[#16284E] text-[40px] font-bold font-['Roboto', sans_serif] mb-11">
            Tipos de etiqueta
            <div className="my-[1px] border-b-[3px] border-[#5BB4EB] w-[295px] mx-auto"></div>
            <p className="mt-4 mb-6 text-second-blue text-xl font-normal font-['Roboto, sans_serif']">
              Dependiendo del material de la etiqueta y del ribbon, ofrecemos
              productos en <br /> distintas calidades, segun tus necesidades y
              aplicaciones:
            </p>
          </div>
        </section>

        <div className="w-full flex justify-center h-full bg-transparent">
          <div className="grid gap-y-20 gap-x-5 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 mx-16 bg-transparent ">
            <EtiquetasCard
              titulo={'Seguridad (VOID)'}
              imagen={Seguridad}
              aplicacion={'bienes de cambio exterior y de uso.'}
              lista={seguridadLista}
            />
            <EtiquetasCard
              titulo={'Textiles'}
              imagen={Textil}
              aplicacion={'Identifica las prendas'}
              lista={textilLista}
            />
            <EtiquetasCard
              titulo={'Plásticas Transparentes '}
              imagen={PlasticaTransparente}
              aplicacion={'varias'}
              lista={plasticasTransparentesLista}
            />
            <EtiquetasCard
              titulo={'Plásticas color'}
              imagen={PlasticasColor}
              aplicacion={'varias.'}
              lista={plasticasColorLista}
            />
            <EtiquetasCard
              titulo={'Económicas Ilustración color'}
              imagen={EconomicasColor}
              aplicacion={'Bienes de cambio de rotacion media/alta. '}
              lista={economicasColor}
            />
            <EtiquetasCard
              titulo={'Económicas termosensible'}
              imagen={EconomicasTermosensibles}
              aplicacion={'Bienes de cambio de alta rotación. '}
              lista={economicasTermosensibles}
            />
          </div>
        </div>

        <div
          id="porque-elegirnos"
          className="flex justify-center flex-col w-full flex-wrap sm:px-[60px] h-auto p-2"
          style={{ background:'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E8E8E8 31%)',}}
        >
          <ElegirnosSection />

        </div>

        <Form />

        <div className="relative z-40">
          <section className="grid place-items-center bg-[#25D366] w-[2.875rem] h-[2.875rem] z-25 fixed bottom-[1.875rem] right-[2.35rem] rounded-full hover:w-[6.25rem] hover:ease-in-out hover:duration-300">
            <div className="grid place-items-center align-items-center w-[2.875rem] h-[2.875rem]">
              <AiOutlineWhatsApp className="p-2 text-white text-[2.875rem]" />
            </div>
          </section>
        </div>

        <ScrollButton />
      </div>
    </div>
  );
}

export default App;
