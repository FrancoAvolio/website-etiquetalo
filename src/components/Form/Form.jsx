import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AlertMessage } from '../AlertMessage/AlertMessage';
import ticket from '../../assets/ticket.svg';
import vector from '../../assets/vector.svg';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [telefono, setTelefono] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_t4qix5j',
        'template_eo9uida',
        e.target,
        'zyHnD8lWhNVngCumG'
      )
      .then(
        (response) => {
          setLoading(false);
          setSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
          setCompany('');
          setTelefono('');
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section
      id="form"
      className="bg-gradient-to-b from-[#162843] to-[#3d799e] p-12"
    >
      <div className="w-full text-center text-white text-[54px] font-semibold font-['Roboto, sans_serif']">
        ¿Listo para Transformar tu Etiquetado?
      </div>
      <p className="text-center text-white text-[22px] font-['Roboto, sans_serif'] mt-6">
        Permítenos ayudarte a encontrar la solución perfecta para tus etiquetas.{' '}
        <br />
        ¡Contáctanos hoy mismo!
      </p>
      <div className="mt-14 max-w-6xl mx-auto w-full flex flex-col sm:flex-row">
        <form onSubmit={sendEmail} className="px-8 font-['Roboto, sans_serif']">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="mb-2 font-medium text-white">
                  Nombre y apellido
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 font-medium text-white"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  name="user_company"
                  id="user_company"
                  className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 font-medium text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 font-medium text-white">
                  Teléfono
                </label>
                <input
                  type="number"
                  name="user_phone"
                  id="phone"
                  className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="w-full mt-10">
              <label
                htmlFor="message"
                className="text-left font-medium text-white"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full p-6 mt-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Ingresa aquí todos los detalles que creas necesarios para hacer tu pedido. !Esperamos tu contacto!"
              ></textarea>
            </div>
            <div className="col-span-2 text-left mt-4 mx-2">
              <button
                type="submit"
                className={`px-12 py-2 font-semibold bg-white text-text-blue transition duration-300 rounded-full ${
                  loading
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-black/70 hover:bg-gray-200'
                }`}
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
              {success && <AlertMessage />}
            </div>
          </div>
        </form>
        <div className="w-full sm:w-1/2 -mt-2 px-12 hidden sm:block">
          <div className="w-[340px] h-[345px] bg-gray-200 rounded-[10px] shadow border-2 border-gray-200">
            <div className="relative">
              <img
                className="absolute -top-8 -left-7"
                src={ticket}
                alt="ticket"
              />
              <p className="w-[274.86px] absolute -left-[1%] top-0 rotate-[-6.11deg] text-center text-white text-xl font-semibold font-['Roboto, sans_serif']">
                ¡Ayudanos a cotizarte!
              </p>
            </div>
            <div className="mt-[60px]">
              <p className="text-center text-text-blue text-lg font-normal font-['Roboto, sans_serif']">
                Para ofrecerte tu presupuesto final brindanos la siguiente
                informacion
              </p>
            </div>
            <ol className="text-text-blue -mt-6 text-left p-8 text-lg font-normal font-['Roboto, sans_serif']">
              <li className="">
                {' '}
                <span className="">1. </span>Tipo de etiqueta
              </li>
              <li className="">
                {' '}
                <span className="">2. </span>Cantidad
              </li>
              <li className="">
                {' '}
                <span className="">3. </span>Dimensiones
              </li>
              <li className="">
                {' '}
                <span className="">4. </span>Color de fondo
              </li>
              <li className="">
                {' '}
                <span className="">5. </span>Color de impresion
              </li>
            </ol>
          </div>
          <div className="w-[340.10px] h-[91.10px] border-t-dashed  bg-second-blue rounded-bl-[10px] rounded-br-[10px] border-t-2 border-4 border-gray-200 -mt-16 ">
            <p className="text-center p-2 text-gray-200">
              ¿Ya pensaste en el diseño? <br /> Adjuntanos la imagen en <br />{' '}
              info@etiquetalo.com.ar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
