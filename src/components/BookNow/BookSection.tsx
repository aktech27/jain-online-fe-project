import BgImage from '../../assets/world.jpeg';
import SectionHead from '../General/SectionHead';
import BookNowForm from './BookNowForm';

const BookSection = () => {
  return (
    <section id="booknow" className="min-h-screen py-6 book-section-gradient">
      <SectionHead title="Book Now" subtitle="Embark on Your Next Adventure Today" />
      <div className="flex flex-col md:flex-row items-center py-6 h-full">
        <div className="w-[100%] md:w-[50%] h-full p-3 md:flex items-center">
          <div className="w-[90%] lg:w-[95%] xl:w-[75%] mx-auto h-[300px] md:h-[750px] overflow-hidden rounded-2xl shadow-2xl shadow-black">
            <img src={BgImage} alt="travel-sample" className="object-cover h-full w-full shadow-2xl object-top" />
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] h-full p-3 md:flex items-center">
          <div className="w-[100%] lg:w-[95%] xl:w-[75%] mx-auto min-h-[750px] overflow-hidden">
            <BookNowForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
