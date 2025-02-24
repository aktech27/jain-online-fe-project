const PackageCard = ({ image, name, description, price, rating }) => {
  return (
    <div className="h-[600px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 ">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden h-[90%] w-[85%]">
        <div className="w-full h-[50%]">
          <img src={image} alt={`img-${name}`} className="object-cover h-full" />
        </div>
        <div>
          <div>{name}</div>
          <div>{description}</div>
          <div>{price}</div>
          <div>{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
