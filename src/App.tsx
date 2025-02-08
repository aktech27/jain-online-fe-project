import { Navbar } from './components';
import BgImage from './assets/travel-bg.webp';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-60px)] text-white flex items-center justify-center">
        <img className="absolute top-0 h-full w-screen -z-1 contrast-150 brightness-60" src={BgImage} alt="travel-background" />
        <div className="text-center flex flex-col justify-center gap-8 h-[90%]">
          <h1 className="text-6xl font-bold">Welcome to AK Travels</h1>
          <h3 className="text-4xl font-bold">Visit Dubai</h3>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
