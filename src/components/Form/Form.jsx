import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { AlertMessage } from '../AlertMessage/AlertMessage';

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
          console.log(response);
          setLoading(false);
          setSuccess(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section
      id="form"
      className="bg-gradient-to-b from-[#162843] to-[#3d799e] p-24"
    >
      <div className="w-full text-center text-white text-[54px] font-semibold font-['Roboto, sans_serif']">
        ¿Listo para Transformar tu Etiquetado?
      </div>
      <p className="text-center text-white text-[22px] font-['Roboto, sans_serif'] mt-6">
        Permítenos ayudarte a encontrar la solución perfecta para tus etiquetas.{' '}
        <br />
        ¡Contáctanos hoy mismo!
      </p>
      <div className="mt-14 w-2/3">
        <form onSubmit={sendEmail} className="px-4 font-['Roboto, sans_serif']">
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
            <p className='text-white text-[20px] font-["Roboto,sans_serif"] mx-auto text-center mt-6'>
              Te ayudamos a armar tu etiqueta, usa esta guia para hacer tu
              pedido!
            </p>
            <div className="w-full mt-2">
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
                placeholder="Ingrese aquí su tipo de etiqueta, sus medidas y los detalles que crea necesarios"
              ></textarea>
            </div>
            <div className="col-span-2 text-center">
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
      </div>
    </section>
  );
};
export default Form;
