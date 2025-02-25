import PackageCard from './PackageCard';
import Image from '../../assets/travel-bg.webp';

const packageItems = [
  {
    id: 1,
    image: Image,
    placeName: 'Bali, Indonesia',
    description: 'Experience the stunning beaches, vibrant culture, and lush rice terraces.',
    price: 1200,
    rating: 4,
  },
  {
    id: 2,
    image: Image,
    placeName: 'Paris, France',
    description: 'Discover the romance of Paris with visits to the Eiffel Tower, Louvre Museum, and charming places.',
    price: 1500,
    rating: 5,
  },
  {
    id: 3,
    image: Image,
    placeName: 'Maasai Mara, Kenya',
    description: 'Embark on an unforgettable safari experience and immerse yourself in the rich Maasai culture.',
    price: 2000,
    rating: 4,
  },
  {
    id: 4,
    image: Image,
    placeName: 'Tokyo, Japan',
    description: 'Explore the bustling streets of Shibuya, visit historic temples, and enjoy world-class sushi.',
    price: 1800,
    rating: 4,
  },
  {
    id: 5,
    image: Image,
    placeName: 'Cairo, Egypt',
    description: 'Discover the ancient pyramids of Giza, the Sphinx, and the treasures of the Egyptian Museum.',
    price: 1600,
    rating: 4,
  },
  {
    id: 6,
    image: Image,
    placeName: 'Amalfi Coast, Italy',
    description: 'Enjoy breathtaking coastal views, visit picturesque towns and savor authentic Italian cuisine.',
    price: 2200,
    rating: 5,
  },
  {
    id: 7,
    image: Image,
    placeName: 'New York City, USA',
    description: 'Experience the vibrant energy of NYC. Visit Times Square, Central Park, and the Statue of Liberty.',
    price: 1400,
    rating: 4,
  },
  {
    id: 8,
    image: Image,
    placeName: 'Great Barrier Reef, Australia',
    description: "Dive into the world's largest coral reef system with colorful marine life.",
    price: 2500,
    rating: 5,
  },
  {
    id: 9,
    image: Image,
    placeName: 'Santorini, Greece',
    description: 'Experience the iconic sunsets, white-washed buildings, and crystal-clear waters.',
    price: 1800,
    rating: 5,
  },
];

const Packages = () => {
  return (
    <section id="booknow" className="min-h-screen py-6">
      <h3 className="text-center text-5xl">Our Packages</h3>
      <div className="grid grid-cols-3 gap-10 mx-auto w-[80vw] my-4">
        {packageItems.map((pkg) => (
          <PackageCard key={pkg.id} image={pkg.image} name={pkg.placeName} description={pkg.description} price={pkg.price} rating={pkg.rating} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
