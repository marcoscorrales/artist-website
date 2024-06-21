import React from 'react';
import artistPhoto from '../assets/lilpeeyn.jpg';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:h-screen bg-cover bg-center">
      <div className="md:w-1/2 p-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Tu Nombre Artístico</h1>
        <p className="text-xl md:text-2xl mb-4">Artista Musical</p>
        <p className="text-lg md:text-xl">Bienvenidos a mi sitio oficial. Aquí podrás conocer más sobre mi música y seguirme en mis redes sociales.</p>
      </div>
      <div className="md:w-1/2 p-8 flex justify-center">
        <img src={artistPhoto} alt="Artista Musical" className="rounded-full w-full md:w-1/2 lg:w-1/3" />
      </div>
    </div>
  );
}

export default Hero;
