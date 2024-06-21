import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import ArtistInfo from './components/ArtistInfo';

function App() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialLinks />
        <ArtistInfo />
        {/* <Gallery />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
