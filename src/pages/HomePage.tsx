import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const images = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1920',
  'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?auto=format&fit=crop&w=1920'
];

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  relative">
      {/* Logo */}
      <Link to="/" className="flex items-center justify-center gap-2 py-8">
        <img src="/images/logo.png" className="w-48 h-auto" alt="Logo" />
      </Link>

      {/* Image Slideshow */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Luxury Hotel ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-serif text-white text-center px-4">
            Experience Unparalleled Luxury
          </h1>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center mt-8 w-full px-4">
        <button
          onClick={() => navigate('/form')}
          className="w-full px-12 py-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg text-white text-3xl font-semibold hover:bg-opacity-30 transition-all duration-300 shadow-lg"
        >
          Take Your Photo
        </button>
      </div>
    </div>
  );
};

export default HomePage;
