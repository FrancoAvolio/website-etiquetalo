import React from 'react'
// import imagenElegirnos from './../../assets/trabajador_con_etiquedadora.png'
import imagenElegirnos from './../../assets/caja_trabajadores.png'
import cajaCeleste from './../../assets/caja_celeste.png'
import './ElegirnosSection.css'

export const ElegirnosSection = () => {
  return (
    <div className="flex flex-col flex-wrap h-auto mt-[8rem]">
      <div className="text-center text-[#16284E] sm:text-[2.5rem] text-3xl font-bold font-['Roboto', sans_serif] mt-2 mb-[2rem] flex-wrap h-auto">
        <h2 className=''>
          ¿Por qué elegirnos?
          <div className="my-4 border-b-[3px] border-[#5BB4EB] w-[295px] mx-auto"></div>
        </h2>
      </div>


      <div className="flex flex-row lg:flex-nowrap justify-center items-center gap-[2rem] mt-[4rem] sm:p-11 h-auto w-full p-0 flex-wrap">


        <ul className="flex flex-col gap-[2.5rem] justify-between sm:w-auto w-full h-auto lg:min-w-[400px] lg:w-[35rem] lg:m-0">
          <div className="relative bg-[#FFF] sm:w-full md:h-[8.75rem] rounded-tr-[20px] rounded-bl-[20px]  text-[#16284E] grid items-center py-4 ps-[6rem] pe-3 w-full h-auto">
            <h2 className="absolute top-[-19%] left-[12%] text-[#16284E] sm:text-[1.5rem] font-semibold font-['Roboto', 'sans_serif'] leading-7 w-full text-xl sm:ms-0 ms-3">
              Te asesoramos
            </h2>
            <div className="absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] h-[4.5rem] w-[4.5rem] grid items-center">
              <img className="h-full w-full" src={cajaCeleste} alt="" />
              <div className="absolute sombra translate-x-[120%] translate-y-[-10%] text-center text-[#F8F8F8] text-4xl font-bold">
                1
              </div>
            </div>
            <ul className='list-disc text-[1rem] leading-tight font-normal font-["Roboto", "sans_serif"]'>
              <li className="">
                Te ayudamos a encontrar la mejor etiqueta para tus productos.
              </li>
              <li className="">
                Definimos la etiqueta según tus necesidades de control de
                inventario, incluyendo tipo de código, longitud de código, y
                tipo de etiqueta.
              </li>
            </ul>
          </div>

          <div className="relative bg-[#FFF] sm:w-full md:h-[8.75rem] rounded-tr-[20px] rounded-bl-[20px] text-[#16284E] grid items-center py-4 ps-[6rem] pe-3 w-full h-auto">
            <h2 className="absolute top-[-19%] left-[12%] text-[#16284E] sm:text-[1.5rem] font-semibold font-['Roboto', 'sans_serif'] leading-7 w-full text-xl sm:ms-0 ms-3">
              Pronta entrega
            </h2>
            <div className="absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] h-[4.5rem] w-[4.5rem] grid items-center">
              <img className="h-full w-full" src={cajaCeleste} alt="" />
              <div className="absolute sombra translate-x-[120%] translate-y-[-10%] text-center text-[#F8F8F8] text-4xl font-bold">
                2
              </div>
            </div>
            <ul className='list-disc text-[1rem] leading-tight font-normal font-["Roboto", "sans_serif"]'>
              <li className="">
                Garantizamos una entrega rápida y puntual de tus etiquetas.
              </li>
              <li className="">
                Nos comprometemos a mantener tus proyectos en tiempo y forma.
              </li>
            </ul>
          </div>



          <div className="relative bg-[#FFF] sm:w-full md:h-[8.75rem] rounded-tr-[20px] rounded-bl-[20px] text-[#16284E] grid items-center py-4 ps-[6rem] pe-3 w-full h-auto">
            <h2 className="absolute top-[-19%] left-[12%] text-[#16284E] sm:text-[1.5rem] font-semibold font-['Roboto', 'sans_serif'] leading-7 w-full text-xl sm:ms-0 ms-3">
              Diseño
            </h2>
            <div className="absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] h-[4.5rem] w-[4.5rem] grid items-center">
              <img className="h-full w-full" src={cajaCeleste} alt="" />
              <div className="absolute sombra translate-x-[120%] translate-y-[-10%] text-center text-[#F8F8F8] text-4xl font-bold">
                3
              </div>
            </div>
            <ul className='list-disc text-[1rem] leading-tight font-normal font-["Roboto", "sans_serif"]'>
              <li className="">
                Si no lo tenés, armamos el formato de tus etiquetas.
              </li>
              <li className="">
                Podemos incluir imágenes, códigos de barra, base de datos para
                tener etiquetas distintas en un mismo rollo.
              </li>
            </ul>
          </div>

          <div className="relative bg-[#FFF] sm:w-full md:h-[8.75rem] rounded-tr-[20px] rounded-bl-[20px] text-[#16284E] grid items-center py-4 ps-[6rem] pe-3 w-full h-auto">
            <h2 className="absolute top-[-19%] left-[12%] text-[#16284E] sm:text-[1.5rem] font-semibold font-['Roboto', 'sans_serif'] leading-7 w-full text-xl sm:ms-0 ms-3">
              Consultanos por otros servicios
            </h2>
            <div className="absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] h-[4.5rem] w-[4.5rem] grid items-center">
              <img className="h-full w-full" src={cajaCeleste} alt="" />
              <div className="absolute sombra translate-x-[120%] translate-y-[-10%] text-center text-[#F8F8F8] text-4xl font-bold">
                4
              </div>
            </div>
            <ul className='list-disc text-[1rem] leading-tight font-normal font-["Roboto", "sans_serif"]'>
              <li className="">
                Tercerizacion de etiquetado y/o de identificacion de activos.
              </li>
              <li className="">
                Nuestro equipo experto se encarga de etiquetar tus productos de
                manera precisa y eficiente.
              </li>
            </ul>
          </div>
        </ul>

        <img
          className="sm:w-auto max-w-full sm:h-auto lg:min-w-[250px] w-0 h-0"
          src={imagenElegirnos}
          alt=""
        />
      </div>
    </div>
  );
}

