import React from 'react'
import imagenElegirnos from './../../assets/trabajador_con_etiquedadora.png'
import cajaCeleste from './../../assets/caja_celeste.png'

export const ElegirnosSection = () => {
  return (
    <div>
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
        </div>
  )
}

