// TECH: Travel Experience, Connectivity, and Hospitality
// Travel Experience: We curate unforgettable journeys tailored to your unique preferences and interests, ensuring every trip is a memorable adventure.

// Engagement: We foster meaningful connections between travelers and local cultures, enhancing your travel experience through immersive activities and interactions.

// Connectivity: Our advanced technology solutions keep you connected throughout your journey, providing real-time updates, travel tips, and support at your fingertips.

// Hospitality: We prioritize exceptional service and hospitality, ensuring that every aspect of your trip is handled with care and attention to detail.

import Logo from '../../assets/aktechtbg.webp';
import BgImage from '../../assets/AboutBg.jpg';

const About = () => {
  return (
    <section id="gallery" className="min-h-screen py-6 about-section-gradient">
      <h3 className="text-center text-5xl">About Us</h3>
      <h4 className="text-center text-2xl text-gray-800 mb-4 mt-2">Discover Our Passion for Travel and Commitment to Unforgettable Experiences</h4>
      <div className="h-[70vh] grid grid-cols-2 gap-4 rounded-lg m-4 p-4">
        <div className="w-full h-full p-4 flex items-center justify-center rounded-lg overflow-hidden relative">
          <div className="absolute w-full h-full z-1">
            <img className="h-full w-full object-cover" src={BgImage} alt="background" />
          </div>
          <div className="aspect-square w-[200px] bg-white rounded-full shadow-xl shadow-slate-600 z-2">
            <img className="h-full w-auto object-contain" src={Logo} alt="logo" />
          </div>
        </div>
        <div className="w-full h-full p-4 bg-red-500">Details Section</div>
      </div>
    </section>
  );
};

export default About;
