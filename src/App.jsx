import './index.css';
import './App.css';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import background from './assets/home-background.jpg';

import handshake from './assets/handshake.svg';
import tag_heart from './assets/tag_heart.svg';
import hands_heart from './assets/hands_heart.svg';
import headset from './assets/headset.svg';

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
import Textil from './../src/assets/textil.png'
import PlasticaTransparente from './../src/assets/plastica.png'
import PlasticasColor from './../src/assets/plasticasColor.png'
import EconomicasColor from './../src/assets/economicasColor.png'
import EconomicasTermosensibles from './../src/assets/economicasTermosensibles.png'

const seguridadLista = ['OPP (plástica autoadhesiva).', 'Máxima durabilidad (5 años)', 'Sugerida para intemperie.', 'Impresión de máxima calidad.', 'Mayor costo.'];
const textilLista = ['Poliamida / fasco (no autoadhesivas).', 'Soporta el lavado.', 'Impresión de máxima calidad.','Costo medio.'];
const plasticasTransparentesLista = ['OPP (plástica autoadhesivas).', 'Máxima durabilidad (5 años).', 'Sugerida para intemperie.', 'Impresión de máxima calidad.', 'Costo medio.'];
const plasticasColorLista = ['OPP (plástica autoadhesivas).','Máxima durabilidad (5 años).','Sugerida para intemperie.','Impresión de máxima calidad.','Costo medio.'];
const economicasColor = ['Calidad de impresión simple.','NO apta para intemperie.','Baja durabilidad.','Bajo costo.'];
const economicasTermosensibles = ['Calidad de impresión básica.', 'NO apta para intemperie.','Mínima durabilidad.','Muy bajo costo.'];

function App() {
  return (
    <div className="w-full bg-white">
      
      <header className="relative z-30 h-[6.875rem] w-full mt-0">
        <Navbar />
        {/* <DrawerAppBar /> */}
      </header>

      <section className="relative z-20 sm:mb-20 sm:mt-[4.375rem] sm:ps-20 lg:ps-40 flex flex-col sm:flex-wrap max-sm:flex-wrap  flex-wrap h-auto ps-4 mb-10 text-xs my-10 gap-4">
        
        <h1 className="sm:leading-[4.125rem] sm:h-[8.438rem] text-gray-200 sm:text-[3.75rem] font-bold font-['Roboto', 'sans_serif'] h-auto text-5xl">
          Impresión de <br />etiquetas a medida
        </h1>

        <p className="sm:leading-tight sm:text-lg text-white sm:text-md font-normal font-['Roboto', 'sans_serif'] text-xs">
          La etiqueta perfecta para cada producto. Explora nuestras <br />
          etiquetas impresas a medida y destaca en el mercado.
        </p>

        <HomeButton titulo={'Ver servicios'} />
      </section>



      <section className="md:h-[12.5rem] sm:h-auto sm:p-5 relative z-20 flex items-center justify-center gap-5 sm:my-[1.875rem] sm:flex-wrap sh-auto flex-wrap my-5 px-7">
        <HomeCard titulo={'Somos profesionales'} imagen={handshake} />

        <HomeCard titulo={'Nos gusta lo que hacemos'} imagen={tag_heart} />

        <HomeCard titulo={'Soluciones de calidad'} imagen={hands_heart} />

        <HomeCard titulo={'Atentos a tus consultas'} imagen={headset} />
      </section>




      <div className="absolute top-0 bottom-0 h-[50rem] w-full z-10">
        <img
          src={background}
          className="absolute top-0 bottom-0 w-full z-10 h-[40.625rem]"
          alt="Vite logo"
        />
      </div>

      <div className="relative z-20 bg-white">
        <div className="flex items-center justify-center pt-[3.125rem]">
          <div className="text-blue-950 text-[2.5rem] font-bold font-['Roboto', sans_serif] text-[#16284E]">
            <h2>Nuestros productos</h2>
            <div className="my-[0.063rem] border-b-[0.188rem] border-[#5BB4EB] w-[10.25rem] mx-auto"></div>
          </div>
        </div>
        <section className="md:h-[26.875rem] md:w-full sm:p-5 flex items-center align-items justify-center sm:gap-[6.688rem] sm:mx-4 flex-wrap h-auto my-10 px-10">
          <RequisitosCard titulo={'Color de base a eleccion'} imagen={imageUrl2} />

          <div className="sm:w-48 sm:h-[10.625rem] bg-white rounded-[1.25rem] shadow-xl shadow-gray-400 border-2 border-white w-[6rem] h-[5.4rem]">
            <div className="">
              <img className="sm:mx-auto sm:w-full sm:h-[7.5rem] w-[5rem] h-[3rem] mt-0" src={imageUrl4} />
              <p className="sm:text-xl font-bold sm:-mt-5 text-center text-text-blue font-['Roboto, sans_serif'] text-xs mt-0">
                Textiles Y Autoadhesivas
              </p>
            </div>
          </div>

          <RequisitosCard titulo={'Único color'} imagen={imageUrl5} />
          <RequisitosCard titulo={'Ancho 110mm'} imagen={imageUrl} />
        </section>
      </div>






      <div className="bg-[#E8E8E8] 2sm:p-2">

        <Products className=" bg-white" />

        <div className='w-full flex justify-center h-full'>
          <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-4 mx-16 bg-white'>
            <EtiquetasCard 
              titulo={'Seguridad (VOID)'} 
              imagen={Seguridad} 
              aplicacion={'bienes de cambio exterior y de uso.'} 
              lista={seguridadLista} /> 
            <EtiquetasCard 
              titulo={'Textiles'}
              imagen={Textil} 
              aplicacion={'Identifica las prendas'}
              lista={textilLista} /> 
            <EtiquetasCard 
              titulo={'Plásticas Transparentes '} 
              imagen={PlasticaTransparente} 
              aplicacion={'varias'} 
              lista={plasticasTransparentesLista} /> 
            <EtiquetasCard titulo={'Plásticas color'} 
              imagen={PlasticasColor} 
              aplicacion={'varias.'} 
              lista={plasticasColorLista} /> 
            <EtiquetasCard 
              titulo={'Económicas Ilustración color'} 
              imagen={EconomicasColor} 
              aplicacion={'Bienes de cambio de rotacion media/alta. '} 
              lista={economicasColor} /> 
            <EtiquetasCard 
              titulo={'Económicas termosensible autoadhesiva.'} 
              imagen={EconomicasTermosensibles} 
              aplicacion={'Bienes de cambio de alta rotación. '} 
              lista={economicasTermosensibles} />
          </div>
        </div> 





        <div className='flex justify-center flex-col w-full flex-wrap sm:px-[60px] h-auto p-2' style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E8E8E8 31%)'}}>
          <ElegirnosSection />
        </div>






        <div>
          <Form />
        </div>





        <div className="relative z-30">
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
