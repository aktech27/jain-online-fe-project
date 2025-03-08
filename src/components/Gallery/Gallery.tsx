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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image1} alt="gallery-image" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image2} alt="gallery-image" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image3} alt="gallery-image" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image4} alt="gallery-image" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image5} alt="gallery-image" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image6} alt="gallery-image" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image7} alt="gallery-image" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image8} alt="gallery-image" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image9} alt="gallery-image" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image1} alt="gallery-image" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image2} alt="gallery-image" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={Image3} alt="gallery-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
