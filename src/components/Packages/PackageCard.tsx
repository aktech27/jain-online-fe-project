const PackageCard = () => {
  return (
    <div className="h-[600px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 ">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden h-[90%] w-[85%]">
        <div className="bg-yellow-200 w-full h-[50%]"></div>
        <div className="bg-orange-200"></div>
      </div>
    </div>
  );
};

export default PackageCard;
