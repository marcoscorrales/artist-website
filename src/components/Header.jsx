import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-dark-blue text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lilpeeyn</h1>
        <ul className="hidden md:flex space-x-4">
          <li><a href="#hero" className="hover:underline">Inicio</a></li>
          <li><a href="#socialLinks" className="hover:underline">Redes</a></li>
          <li><a href="#info" className="hover:underline">Información</a></li>
          <li><a href="#galery" className="hover:underline">Galería</a></li>
          <li><a href="#contact" className="hover:underline">Contacto</a></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-2">
          <li><a href="#hero" className="block px-4 py-2 hover:bg-blue-600">Inicio</a></li>
          <li><a href="#events" className="block px-4 py-2 hover:bg-blue-600">Eventos</a></li>
          <li><a href="#gallery" className="block px-4 py-2 hover:bg-blue-600">Galería</a></li>
          <li><a href="#contact" className="block px-4 py-2 hover:bg-blue-600">Contacto</a></li>
        </ul>
      )}
    </header>
  );
}

export default Header;
