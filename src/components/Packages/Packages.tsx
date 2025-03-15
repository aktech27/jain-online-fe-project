import PackageCard from './PackageCard';
import Image1 from '../../assets/places/bali.jpg';
import Image2 from '../../assets/places/france.jpg';
import Image3 from '../../assets/places/kenya.jpg';
import Image4 from '../../assets/places/tokyo.jpg';
import Image5 from '../../assets/places/cairo.jpg';
import Image6 from '../../assets/places/coast.webp';
import Image7 from '../../assets/places/newyork.jpg';
import Image8 from '../../assets/places/australia.jpg';
import Image9 from '../../assets/places/greece.jpg';
import SectionHead from '../General/SectionHead';

const packageItems = [
  {
    id: 1,
    image: Image1,
    placeName: 'Bali, Indonesia',
    description: 'Experience the stunning beaches, vibrant culture, and lush rice terraces.',
    price: 1200,
    rating: 4,
  },
  {
    id: 2,
    image: Image2,
    placeName: 'Paris, France',
    description: 'Discover the romance of Paris with visits to the Eiffel Tower, Louvre Museum, and charming places.',
    price: 1500,
    rating: 5,
  },
  {
    id: 3,
    image: Image3,
    placeName: 'Maasai Mara, Kenya',
    description: 'Embark on an unforgettable safari experience and immerse yourself in the rich Maasai culture.',
    price: 2000,
    rating: 4,
  },
  {
    id: 4,
    image: Image4,
    placeName: 'Tokyo, Japan',
    description: 'Explore the bustling streets of Shibuya, visit historic temples, and enjoy world-class sushi.',
    price: 1800,
    rating: 4,
  },
  {
    id: 5,
    image: Image5,
    placeName: 'Cairo, Egypt',
    description: 'Discover the ancient pyramids of Giza, the Sphinx, and the treasures of the Egyptian Museum.',
    price: 1600,
    rating: 4,
  },
  {
    id: 6,
    image: Image6,
    placeName: 'Amalfi Coast, Italy',
    description: 'Enjoy breathtaking coastal views, visit picturesque towns and savor authentic Italian cuisine.',
    price: 2200,
    rating: 5,
  },
  {
    id: 7,
    image: Image7,
    placeName: 'New York City, USA',
    description: 'Experience the vibrant energy of NYC. Visit Times Square, Central Park, and the Statue of Liberty.',
    price: 1400,
    rating: 4,
  },
  {
    id: 8,
    image: Image8,
    placeName: 'Great Barrier, Australia',
    description: "Dive into the world's largest coral reef system with colorful marine life.",
    price: 2500,
    rating: 5,
  },
  {
    id: 9,
    image: Image9,
    placeName: 'Santorini, Greece',
    description: 'Experience the iconic sunsets, white-washed buildings, and crystal-clear waters.',
    price: 1800,
    rating: 5,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="min-h-screen py-6">
      <SectionHead title="Our Packages" subtitle="Curated Journeys to Unforgettable Destinations" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mx-auto w-[90vw] max-w-[500px] md:max-w-none md:w-[100vw] 2xl:w-[80vw] my-2">
        {packageItems.map((pkg) => (
          <PackageCard key={pkg.id} image={pkg.image} name={pkg.placeName} description={pkg.description} price={pkg.price} rating={pkg.rating} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
