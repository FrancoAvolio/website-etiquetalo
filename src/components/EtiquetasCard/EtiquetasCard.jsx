
import React from 'react'

const EtiquetasCard = ({imagen, titulo }) => {
  return (
    <div className='card'>
        <img src={imagen} alt="" />
        <h3 className=' '>
            <p className=" text-gray-200 text-xl font-bold font-['Roboto, sans_serif']">{titulo}</p>
        </h3>
        
        <div className='especificacion-card'>
            <h3>{titulo}</h3>
            <p>
                {caracteristicas}
            </p>
            <p>
                {aplicacion}
            </p>
        </div>
    </div>
  )
}

export default EtiquetasCard