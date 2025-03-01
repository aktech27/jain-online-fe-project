import { PackageCardProps } from '../../types';
import Stars from '../../assets/star-four.svg';
import Stars2 from '../../assets/star-five.svg';

const PackageCard = ({ image, name, description, price, rating }: PackageCardProps) => {
  return (
    <div className="h-[550px] flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden h-[100%] w-[85%] hover:shadow-3xl">
        <div className="w-full h-[50%]">
          <img src={image} alt={`img-${name}`} className="object-cover h-full w-full" />
        </div>
        <div className="px-4 py-2">
          <div className="text-2xl font-bold mt-2">{name}</div>
          <div className="text-xs text-gray-500 mb-2">{description}</div>
          <div className="flex gap-4 items-center">
            <div className="flex text-sm border-yellow-700 bg-yellow-500 border-1 rounded-lg w-fit pl-1 my-2">
              <div className="p-2 text-white mr-2">Rating</div>
              <div className="bg-yellow-200 text-yellow-700 p-2 rounded-lg w-fit font-bold">{rating.toFixed(1)}</div>
            </div>
            <span className="w-[100px]">{rating == 4 ? <img src={Stars} alt="4star" /> : <img src={Stars2} alt="4star" />}</span>
          </div>
          <div className="flex border-green-700 bg-green-500 border-1 rounded-lg w-fit pl-2 my-4">
            <div className="p-2 text-white mr-2">Price</div>
            <div className="bg-green-200 text-green-700 p-2 rounded-lg w-fit font-bold">{`$${price}`}</div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-[40%] text-blue-600 border-blue-700 border-1 transition-all duration-300 bg-white focus:ring-3 focus:outline-none focus:ring-blue-300 rounded-lg py-2 px-4 text-center cursor-pointer"
            >
              Learn More
            </button>
            <button
              type="button"
              className="w-[40%] text-white transition-all duration-300 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-3 focus:outline-none focus:ring-blue-300 rounded-lg py-2 px-4 text-center cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
