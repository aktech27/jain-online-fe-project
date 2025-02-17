import BgImage from '../../assets/travel-bg.webp';

const BookSection = () => {
  return (
    <section id="booknow" className="h-screen py-6">
      <h3 className="text-center text-5xl">Book Now</h3>
      <div className="flex items-center p-3 py-6 h-full">
      <div className="w-[50%] h-full p-3 flex items-center">
        <div className="w-[75%] mx-auto h-[750px] overflow-hidden rounded-2xl shadow-2xl shadow-black">
          <img src={BgImage} alt="travel-sample" className='object-cover h-full shadow-2xl'/>
        </div>
      </div>
      <div className="w-[50%] h-full p-3 flex items-center">
      <div className="w-[75%] mx-auto h-[750px] overflow-hidden">
          <form className='w-full'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}

export default BookSection