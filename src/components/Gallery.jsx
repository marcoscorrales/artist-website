import React from 'react';

function Gallery() {
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    // Añade más rutas de imágenes aquí
  ];

  return (
    <section id="gallery" className="container mx-auto my-12 p-4">
      <h2 className="text-4xl font-bold mb-6 text-dark-blue">Galería</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-200 rounded-lg overflow-hidden">
            <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
