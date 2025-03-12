import Image1 from '../../assets/places/bali.jpg';
import Image2 from '../../assets/places/france.jpg';
import Image3 from '../../assets/places/kenya.jpg';
import Image4 from '../../assets/places/tokyo.jpg';
import Image5 from '../../assets/places/cairo.jpg';
import Image6 from '../../assets/places/coast.webp';
import Image7 from '../../assets/places/newyork.jpg';
import Image8 from '../../assets/places/australia.jpg';
import Image9 from '../../assets/places/greece.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen py-6 gallery-section-gradient">
      <h3 className="text-center text-5xl">Our Gallery</h3>
      <h4 className="text-center text-2xl text-gray-800 mb-4 mt-2">Visual Stories from the World's Most Enchanting Places</h4>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-3 md:px-4 lg:px-12 h-full">
        <div className="grid grid-cols-1 grid-rows-12 gap-4">
          <div className="rounded-lg overflow-hidden row-span-6 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image1} alt="gallery-image" />
          </div>
          <div className="rounded-lg overflow-hidden row-span-3 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image2} alt="gallery-image" />
          </div>
          <div className="rounded-lg overflow-hidden row-span-3 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image3} alt="gallery-image" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-12 gap-4">
          <div className="rounded-lg overflow-hidden row-span-3 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image4} alt="gallery-image" />
          </div>
          <div className="rounded-lg overflow-hidden row-span-6 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image5} alt="gallery-image" />
          </div>
          <div className="rounded-lg overflow-hidden row-span-3 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image6} alt="gallery-image" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-12 gap-4">
          <div className="rounded-lg overflow-hidden row-span-4 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image7} alt="gallery-image" />
          </div>
          <div className="rounded-lg overflow-hidden row-span-3 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image8} alt="gallery-image" />
          </div>
          <div className="rounded-lg overflow-hidden row-span-5 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image9} alt="gallery-image" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-12 gap-4">
          <div className="rounded-lg overflow-hidden row-span-4 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image1} alt="gallery-image" />
          </div>
          <div className="rounded-lg overflow-hidden row-span-5 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image2} alt="gallery-image" />
          </div>
          <div className="rounded-lg overflow-hidden row-span-3 hover:scale-105 transition-all duration-500">
            <img className="h-full w-full" src={Image3} alt="gallery-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
