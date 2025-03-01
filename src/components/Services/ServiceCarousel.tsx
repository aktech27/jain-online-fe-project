import { useState } from 'react';
import { ServiceCarouselProps } from '../../types';

const ServiceCarousel = ({ items }: ServiceCarouselProps) => {
  const services = items;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const displayedServices = [services[(currentIndex - 1 + services.length) % services.length], services[currentIndex % services.length], services[(currentIndex + 1) % services.length]];

  return (
    <div className="relative flex gap-4 overflow-hidden py-5 mx-auto w-[95vw]">
      <button onClick={prevSlide} className="absolute left-1 top-[50%] -translate-y-[50%] text-3xl text-bold cursor-pointer p-3 z-1 bg-black text-white rounded-2xl shadow-2xl border-white border-2">
        {'<<'}
      </button>
      <div className="flex gap-2">
        {displayedServices.map((service, index) => (
          <div key={index} className={`relative flex flex-col min-w-[30vw] aspect-[5/4] shadow-2xl ${index != 1 ? 'scale-85' : 'scale-100'} rounded-md`}>
            <div>
              <img className="h-full w-full object-cover rounded-md" src={service.image} alt="service-image" />
            </div>
            <div className="absolute bg-black/65 text-white bottom-0 p-4 rounded-b-md">
              <div className="text-2xl text-center font-extrabold">{service.name}</div>
              <div className="text-lg text-center">{service.description}</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="absolute right-1 top-[50%] -translate-y-[50%] text-3xl text-bold cursor-pointer p-3 z-1 bg-black text-white rounded-2xl shadow-2xl border-white border-2">
        {'>>'}
      </button>
    </div>
  );
};

export default ServiceCarousel;
