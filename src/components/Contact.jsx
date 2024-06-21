import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container mx-auto my-12 p-4">
      <h2 className="text-4xl font-bold mb-6 text-dark-blue">Contacto</h2>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Nombre</label>
          <input type="text" id="name" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
          <input type="email" id="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Mensaje</label>
          <textarea id="message" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-blue" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-dark-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
