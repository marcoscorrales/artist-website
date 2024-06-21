import React from 'react';

function Events() {
  const events = [
    { date: '2023-07-20', location: 'Ciudad A', description: 'Concierto en el Teatro X' },
    { date: '2023-08-15', location: 'Ciudad B', description: 'Festival de Música Y' },
    // Añade más eventos aquí
  ];

  return (
    <section id="events" className="container mx-auto my-12 p-4">
      <h2 className="text-4xl font-bold mb-6 text-dark-blue">Próximos Eventos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-dark-blue">{event.date}</h3>
            <p className="mt-2">{event.location}</p>
            <p className="mt-2 text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
