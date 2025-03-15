import Logo from '../../assets/aktechtbg.webp';
import BgImage from '../../assets/AboutBg.jpg';
import SectionHead from '../General/SectionHead';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-6 about-section-gradient">
      <SectionHead title="About Us" subtitle="Discover Our Passion for Travel and Commitment to Unforgettable Experiences" />
      <div className="min-h-[400px] lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-lg m-4 p-4">
        <div className="w-full h-full p-4 flex items-center justify-center rounded-lg overflow-hidden relative">
          <div className="absolute w-full h-full z-1">
            <img className="h-full w-full object-cover" src={BgImage} alt="background" />
          </div>
          <div className="aspect-square w-[200px] bg-white rounded-full shadow-xl shadow-slate-600 z-2">
            <img className="h-full w-auto object-contain" src={Logo} alt="logo" />
          </div>
        </div>
        <div className="w-full h-full p-6 bg-white shadow-2xl shadow-slate-600 rounded-lg">
          <h6 className="text-lg text-slate-600 font-bold ">AK Travels</h6>
          <h5 className="text-2xl font-extrabold mb-4">
            Crafting Unforgettable Journeys Through <span>T.E.C.H</span>
          </h5>
          <div>
            <p className="my-3 first-letter:text-3xl first-letter:font-extrabold">
              <span className="font-bold text-lg">Travel Experience:</span> We curate unforgettable journeys tailored to your unique preferences and interests, ensuring every trip is a memorable
              adventure.
            </p>
            <p className="my-3 first-letter:text-3xl first-letter:font-extrabold">
              <span className="font-bold text-lg">Engagement: </span>We foster meaningful connections between travelers and local cultures, enhancing your travel experience through immersive
              activities and interactions.
            </p>
            <p className="my-3 first-letter:text-3xl first-letter:font-extrabold">
              <span className="font-bold text-lg">Connectivity: </span>Our advanced technology solutions keep you connected throughout your journey, providing real-time updates, travel tips, and
              support at your fingertips.
            </p>
            <p className="my-3 first-letter:text-3xl first-letter:font-extrabold">
              <span className="font-bold text-lg">Hospitality: </span>We prioritize exceptional service and hospitality, ensuring that every aspect of your trip is handled with care and attention to
              detail.
            </p>
          </div>
          <div className="w-[85%] mx-auto p-8 border-2 border-blue-500 mt-10 flex flex-col sm:flex-row justify-around rounded-xl text-md">
            <div className="flex flex-row sm:flex-col m-auto items-center">
              <span className="text-3xl font-extrabold mr-2">5+</span>
              <span>Years</span>
            </div>
            <div className="flex flex-row sm:flex-col m-auto items-center">
              <span className="text-3xl font-extrabold mr-2">10+</span>
              <span>Destinations</span>
            </div>
            <div className="flex flex-row sm:flex-col m-auto items-center">
              <span className="text-3xl font-extrabold mr-2">10000+</span>
              <span>Journeys</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
