import BgImage from '../../assets/travel-bg.webp';

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-60px)] text-white flex items-center justify-center">
      <img className="absolute top-0 h-full w-screen -z-1 contrast-150 brightness-60" src={BgImage} alt="travel-background" />
      <div className="text-center flex flex-col justify-center gap-4 h-[90%]">
        <h3 className="text-5xl tracking-wide">Welcome to AK Travels</h3>
        <h1 className="text-9xl font-bold tracking-wider">Visit Dubai</h1>
        <button
          type="button"
          className="w-50 mt-20 mx-auto text-2xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
