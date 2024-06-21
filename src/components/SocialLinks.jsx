import React from 'react';
import { FaSoundcloud, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div id='socialLinks' className="flex justify-center space-x-6 py-8 bg-gray-800">
      <a href="https://soundcloud.com/lilpeeyn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaSoundcloud size={30} />
      </a>
      <a href="https://youtube.com/@LilPeeyn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaYoutube size={30} />
      </a>
      <a href="https://instagram.com/lilpeeyn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaInstagram size={30} />
      </a>
      <a href="https://www.facebook.com/people/Lil-Peeyn/100095122830023/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;
