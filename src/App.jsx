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

function App() {
  return (
    <div className="w-full">
      <ScrollButton />
      <header className="relative z-30 h-[110px] w-full mt-0">
        <Navbar />
      </header>

      <section className="relative z-20 mb-[80px] mt-[70px] ps-[150px]">
        
        <h1 className=" mb-4 leading-[66px] w-[750px] h-[135px] text-gray-200 text-[60px] font-bold font-['Roboto', 'sans_serif']">
          Impresion de <br />etiquetas a medida
        </h1>

        <p className=" mb-5 w-473 leading-tight text-white text-md font-normal font-['Roboto', 'sans_serif']">
          La etiqueta perfecta para cada producto. Explora nuestras <br />
          etiquetas impresas a medida y destaca en el mercado.
        </p>

        <HomeButton titulo={'Ver servicios'} />
      </section>

      <section className=" h-[200px] w-[1200] relative z-20 flex items-center align-items justify-center gap-5 my-[30px]">
        <HomeCard titulo={'Somos profesionales'} imagen={handshake} />

        <HomeCard titulo={'Nos Gusta lo que hacemos'} imagen={tag_heart} />

        <HomeCard titulo={'Soluciones de calidad'} imagen={hands_heart} />

        <HomeCard titulo={'Atentos a tus consultas'} imagen={headset} />
      </section>

      <div className="relative z-30">
        <section className="grid place-items-center bg-[#25D366] w-[46px] h-[46px] z-25 fixed bottom-[30px] right-[2.35rem] rounded-full hover:w-[100px] hover:ease-in-out hover:duration-300">
          <div className="grid place-items-center align-items-center w-[46px] h-[46px]">
            <AiOutlineWhatsApp className="p-2 text-white text-[46px]" />
          </div>
        </section>
      </div>

      <div className="absolute top-0 bottom-0 h-[800px] w-full z-10">
        <img
          src={background}
          className="absolute top-0 bottom-0 w-full z-10 h-[660px]"
          alt="Vite logo"
        />
      </div>

      {/* <Section /> */}
      <div className=" relative z-20 bg-[#E8E8E8]">
        <div className="flex items-center justify-center pt-[50px]">
          <div className=" text-blue-950 text-[40px] font-bold font-['Roboto', sans_serif] text-[#16284E]">
            <h2>Requisitos</h2>
            <div className="my-[1px] border-b-[3px] border-[#5BB4EB] w-[164px] mx-auto"></div>
          </div>
        </div>

        <section className=" h-[430px] w-full flex items-center align-items justify-center gap-5 mx-4 ">
          <RequisitosCard titulo={'Largo ilimitado'} imagen={imageUrl3} />
          <RequisitosCard
            titulo={'Color de base a eleccion'}
            imagen={imageUrl2}
          />
          <div className="w-48 h-[170px] bg-white rounded-[20px] shadow-xl shadow-gray-400 border-2 border-white">
            <div className="">
              <img className="mx-auto w-full h-[120px]" src={imageUrl4} />
              <p className="text-xl font-bold -mt-5 text-center text-text-blue font-['Roboto, sans_serif']">
                Textiles Y Autoadhesivas
              </p>
            </div>
          </div>
          <RequisitosCard titulo={'Único color'} imagen={imageUrl5} />
          <RequisitosCard titulo={'Ancho 110mm'} imagen={imageUrl} />
        </section>
      </div>

      <div className="bg-[#E8E8E8]">
        <Products className="" />
        <Form />
      </div>
    </div>
  );
}

export default App;
