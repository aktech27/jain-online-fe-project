import ServiceCarousel from './ServiceCarousel';
import Image1 from '../../assets/services/hotels.png';
import Image2 from '../../assets/services/food.png';
import Image3 from '../../assets/services/safety.png';
import Image4 from '../../assets/services/guided.png';
import Image5 from '../../assets/services/transportation.png';
import Image6 from '../../assets/services/insurance.png';
import SectionHead from '../General/SectionHead';

const serviceItems = [
  {
    id: 1,
    name: 'Affordable Hotels',
    description: 'Find budget-friendly hotels that offer great amenities and comfort.',
    image: Image1,
  },
  {
    id: 2,
    name: 'Food and Drinks',
    description: 'Enjoy local cuisine and beverages at the best restaurants and cafes.',
    image: Image2,
  },
  {
    id: 3,
    name: 'Safety Guide',
    description: 'Get essential safety tips and guidelines for a secure travel experience.',
    image: Image3,
  },
  {
    id: 4,
    name: 'Guided Tours',
    description: 'Join expert-led tours to explore popular attractions and hidden gems.',
    image: Image4,
  },
  {
    id: 5,
    name: 'Transportation Services',
    description: 'Convenient transportation options including airport transfers and car rentals.',
    image: Image5,
  },
  {
    id: 6,
    name: 'Travel Insurance',
    description: 'Protect your trip with comprehensive travel insurance plans.',
    image: Image6,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-6 service-section-gradient">
      <SectionHead title="Our Services" subtitle="From Booking to Adventure - We got it all covered" />
      <ServiceCarousel items={serviceItems} />
    </section>
  );
};

export default Services;
