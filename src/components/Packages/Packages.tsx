import PackageCard from './PackageCard';
import Image from '../../assets/travel-bg.webp';

const packageItems = [
  {
    id: 1,
    image: Image,
    placeName: 'Bali, Indonesia',
    description: 'Experience the stunning beaches, vibrant culture, and lush rice terraces. Visit the iconic Uluwatu Temple and enjoy traditional Balinese dance performances.',
    price: 1200,
    rating: 4,
  },
  {
    id: 2,
    image: Image,
    placeName: 'Paris, France',
    description: 'Discover the romance of Paris with visits to the Eiffel Tower, Louvre Museum, and charming Montmartre. Enjoy a Seine River cruise and indulge in French cuisine.',
    price: 1500,
    rating: 5,
  },
  {
    id: 3,
    image: Image,
    placeName: 'Maasai Mara, Kenya',
    description: 'Embark on an unforgettable safari experience. Witness the Great Migration, spot the Big Five, and immerse yourself in the rich Maasai culture.',
    price: 2000,
    rating: 4,
  },
  {
    id: 4,
    image: Image,
    placeName: 'Tokyo, Japan',
    description: "Explore the bustling streets of Shibuya, visit historic temples, and enjoy world-class sushi. Don't miss the cherry blossoms in spring!",
    price: 1800,
    rating: 4,
  },
  {
    id: 5,
    image: Image,
    placeName: 'Cairo, Egypt',
    description: 'Discover the ancient pyramids of Giza, the Sphinx, and the treasures of the Egyptian Museum. Experience a cruise on the Nile River.',
    price: 1600,
    rating: 4,
  },
  {
    id: 6,
    image: Image,
    placeName: 'Amalfi Coast, Italy',
    description: 'Enjoy breathtaking coastal views, visit picturesque towns like Positano and Ravello, and savor authentic Italian cuisine.',
    price: 2200,
    rating: 5,
  },
  {
    id: 7,
    image: Image,
    placeName: 'New York City, USA',
    description: 'Experience the vibrant energy of NYC. Visit Times Square, Central Park, and the Statue of Liberty. Enjoy Broadway shows and diverse dining options.',
    price: 1400,
    rating: 4,
  },
  {
    id: 8,
    image: Image,
    placeName: 'Great Barrier Reef, Australia',
    description: "Dive into the world's largest coral reef system. Snorkel with colorful marine life and explore the stunning islands of Queensland.",
    price: 2500,
    rating: 5,
  },
  {
    id: 9,
    image: Image,
    placeName: 'Santorini, Greece',
    description: 'Experience the iconic sunsets, white-washed buildings, and crystal-clear waters. Explore ancient ruins and enjoy delicious Greek cuisine.',
    price: 1800,
    rating: 5,
  },
];

const Packages = () => {
  return (
    <section id="booknow" className="h-screen py-6">
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
