import BgImage from '../../assets/world.jpeg';
import BookNowForm from './BookNowForm';

const BookSection = () => {
  return (
    <section id="booknow" className="min-h-screen py-6 book-section-gradient">
      <h3 className="text-center text-5xl">Book Now</h3>
      <h4 className="text-center text-2xl text-gray-800 mb-4 mt-2">Embark on Your Next Adventure Today</h4>
      <div className="flex items-center py-6 h-full">
        <div className="w-[100%] md:w-[50%] h-full p-3 flex items-center">
          <div className="w-[100%] md:w-[85%] lg:w-[75%] mx-auto h-[750px] overflow-hidden rounded-2xl shadow-2xl shadow-black">
            <img src={BgImage} alt="travel-sample" className="object-cover h-full shadow-2xl" />
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-full p-3 flex items-center">
          <div className="w-[100%] md:w-[85%] lg:w-[75%] mx-auto min-h-[750px] overflow-hidden">
            <BookNowForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
