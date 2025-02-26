import ServiceCarousel from './ServiceCarousel';

const serviceItems = [
  {
    id: 1,
    name: 'Affordable Hotels',
    description: 'Find budget-friendly hotels that offer great amenities and comfort.',
  },
  {
    id: 2,
    name: 'Food and Drinks',
    description: 'Enjoy local cuisine and beverages at the best restaurants and cafes.',
  },
  {
    id: 3,
    name: 'Safety Guide',
    description: 'Get essential safety tips and guidelines for a secure travel experience.',
  },
  {
    id: 4,
    name: 'Guided Tours',
    description: 'Join expert-led tours to explore popular attractions and hidden gems.',
  },
  {
    id: 5,
    name: 'Transportation Services',
    description: 'Convenient transportation options including airport transfers and car rentals.',
  },
  {
    id: 6,
    name: 'Travel Insurance',
    description: 'Protect your trip with comprehensive travel insurance plans.',
  },
];

const Services = () => {
  return (
    <section id="booknow" className="h-screen py-6">
      <h3 className="text-center text-5xl">Our Services</h3>
      <ServiceCarousel />
    </section>
  );
};

export default Services;
