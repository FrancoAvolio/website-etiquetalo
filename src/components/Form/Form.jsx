import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
    <div className="max-w-[72rem] px-4 pt-10 mx-auto mt-10">
      <div className="flex mx-auto">
        <form
          onSubmit={sendEmail}
          className="ml-4 flex-auto p-4 font-['Roboto, sans_serif']"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-gray-700"
            >
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
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-medium  text-gray-700"
            >
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
          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block mb-2 font-medium  text-gray-700"
            >
              Teléfono
            </label>
            <input
              type="number"
              name="user_phone"
              id="telefono"
              className="w-full p-2 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-medium  text-gray-700"
            >
              Tu mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full p-6 transition duration-500 bg-gray-100 border-2 rounded-md focus:outline-none focus:border-black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`px-4 py-2 font-medium text-white transition duration-500 rounded-md ${
                loading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-black/70 hover:bg-black/90'
              }`}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
            {success && (
              <p className="text-green-500 mt-2">
                El correo electrónico se envió correctamente.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
