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
// import {DrawerAppBar} from './components/Bar/DrawerAppBar';

// import Section from './components/Sections/Section';
import ScrollButton from './components/Scroll/ScrollButton';
import Products from './components/Sections/Products';
import Form from './components/Form/Form';

import { RequisitosCard } from './components/RequisitosCard/RequisitosCard';

import imageUrl from '../src/assets/ruler.svg';
import imageUrl2 from '../src/assets/etiqueta.svg';
import imageUrl3 from '../src/assets/rulermeasure.svg';
import imageUrl4 from '../src/assets/change.svg';
import imageUrl5 from '../src/assets/tear.svg';
import imagenElegirnos from '../src/assets/trabajador_con_etiquedadora.png';
import cajaCeleste from './../src/assets/caja_celeste.png'

import { Drawer } from '@material-tailwind/react';
import DrawerAppBar from './components/Bar/DrawerAppBar';
 
import {EtiquetasCard} from './components/EtiquetasCard/EtiquetasCard';
import seguridad from './../src/assets/seguridad.png';

function App() {
  return (
    <div className="w-full bg-white">
      <ScrollButton />
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






      {/* <Section /> */}
      <div className="relative z-20 bg-white">
        <div className="flex items-center justify-center pt-[3.125rem]">
          <div className="text-blue-950 text-[2.5rem] font-bold font-['Roboto', sans_serif] text-[#16284E]">
            <h2>Nuestros productos</h2>
            <div className="my-[0.063rem] border-b-[0.188rem] border-[#5BB4EB] w-[10.25rem] mx-auto"></div>
          </div>
        </div>

        <section className="md:h-[26.875rem] md:w-full sm:p-5 flex items-center align-items justify-center sm:gap-[6.688rem] sm:mx-4 flex-wrap h-auto my-10 px-10">
          {/* <RequisitosCard titulo={'Largo ilimitado'} imagen={imageUrl3} /> */}
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






        <div className='flex justify-center flex-col w-full h-[55.625rem] flex-wrap px-[60px]' style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #E8E8E8 31%)'}}>
          <div className="text-center text-[#16284E] text-[2.5rem] font-bold font-['Roboto', sans_serif] mt-2 mb-[6rem] flex-wrap">
            ¿Por qué elegirnos?
            <div className="my-[1px] border-b-[3px] border-[#5BB4EB] w-[295px] mx-auto"></div>
          </div>

          <div className='flex justify-center items-center gap-[130px] p-11'>
            <ul className='flex flex-col gap-[70px] justify-between'>

              <div className='relative w-[31.25rem] h-[8.75rem] rounded-tr-[20px] rounded-bl-[20px] text-[#16284E] grid items-center py-4 ps-[5rem] pe-4' style={{background:'rgba(61, 121, 158, 0.30)',}}>
                <h2 className="absolute top-[-12.5%] left-[13%] text-[#16284E] text-[26px] font-semibold font-['Roboto', 'sans_serif'] leading-7">Te asesoramos</h2>
                <div className='absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] h-[4.5rem] w-[4.5rem] grid items-center'>
                  <img className='h-full w-full' src={cajaCeleste} alt="" />
                  <div className='absolute translate-x-[120%] translate-y-[-10%] text-center text-[#F8F8F8] text-4xl font-bold' style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>1</div> 
                </div>
                <ul className='list-disc'>
                  <li className='text-[16px] mb-2 leading-tight font-normal font-["Roboto", "sans_serif"]'>Te ayudamos a encontrar la mejor etiqueta para tus productos.</li>
                  <li className='text-[16px] leading-tight font-normal font-["Roboto", "sans_serif"]'>Definimos la etiqueta según tus necesidades de control de inventario, incluyendo tipo de código, longitud de código, y tipo de etiqueta.</li>
                </ul>
              </div>

              <div className='relative w-[31.25rem] h-[8.75rem] rounded-tr-[20px] rounded-bl-[20px] text-[#16284E] grid items-center py-4 ps-[5rem] pe-4' style={{background:'rgba(61, 121, 158, 0.30)',}}>
                <h2 className="absolute top-[-12.5%] left-[13%] text-[#16284E] text-[26px] font-semibold font-['Roboto', 'sans_serif'] leading-7">Pronta entrega</h2>
                <div className='absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] h-[4.5rem] w-[4.5rem] grid items-center'>
                  <img className='h-full w-full' src={cajaCeleste} alt="" />
                  <div className='absolute translate-x-[120%] translate-y-[-10%] text-center text-[#F8F8F8] text-4xl font-bold' style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>2</div> 
                </div>
                <ul className='list-disc'>
                  <li className='text-base mb-2 leading-tight font-normal font-["Roboto", "sans_serif"]'>Garantizamos una entrega rápida y puntual de tus etiquetas.</li>
                  <li className='text-[16px] leading-tight font-normal font-["Roboto", "sans_serif"]'>Nos comprometemos a mantener tus proyectos en tiempo y forma.</li>
                </ul>
                
              </div>

              <div className='relative w-[31.25rem] h-[8.75rem] rounded-tr-[20px] rounded-bl-[20px] text-[#16284E] grid items-center py-4 ps-[5rem] pe-4' style={{background:'rgba(61, 121, 158, 0.30)',}}>
                <h2 className="absolute top-[-12.5%] left-[13%] text-[#16284E] text-[26px] font-semibold font-['Roboto', 'sans_serif'] leading-7">Servicio de etiquetado</h2>
                <div className='absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] h-[4.5rem] w-[4.5rem] grid items-center'>
                  <img className='h-full w-full' src={cajaCeleste} alt="" />
                  <div className='absolute translate-x-[120%] translate-y-[-10%] text-center text-[#F8F8F8] text-4xl font-bold' style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>3</div> 
                </div>
                <ul className='list-disc'>
                  <li className='text-[16px] mb-2 leading-tight font-normal font-["Roboto", "sans_serif"]'>Ofrecemos un servicio completo de etiquetado para simplificar tu proceso de etiquetado.</li>
                  <li className='text-[16px] leading-tight font-normal font-["Roboto", "sans_serif"]'>Nuestro equipo experto se encarga de etiquetar tus productos de manera precisa y eficiente.</li>
                </ul>
                
              </div>
            </ul>
            <img src={imagenElegirnos} alt="" />
          </div>

          <EtiquetasCard imagen={seguridad} titulo={'seguridad'} />
          
          <div className="relative z-30">
            <section className="grid place-items-center bg-[#25D366] w-[2.875rem] h-[2.875rem] z-25 fixed bottom-[1.875rem] right-[2.35rem] rounded-full hover:w-[6.25rem] hover:ease-in-out hover:duration-300">
              <div className="grid place-items-center align-items-center w-[2.875rem] h-[2.875rem]">
                <AiOutlineWhatsApp className="p-2 text-white text-[2.875rem]" />
              </div>
            </section>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
}

export default App;
