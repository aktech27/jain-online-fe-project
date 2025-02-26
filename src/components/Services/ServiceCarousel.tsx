import { ServiceCarouselProps } from '../../types';

const ServiceCarousel = () => {
  return (
    <div className="relative flex gap-4 overflow-x-hidden bg-yellow-200 py-4 mx-auto w-[90vw]">
      <div className="absolute top-1 left-1">Button</div>
      <div className="flex flex-col min-w-[30vw] aspect-[5/4] bg-red-400 scale-85 skew-x-1">
        <div>Name</div>
        <div>desc</div>
      </div>
      <div className="flex flex-col min-w-[30vw] aspect-[5/4] bg-red-400">
        <div>Name</div>
        <div>desc</div>
      </div>
      <div className="flex flex-col min-w-[30vw] aspect-[5/4] bg-red-400 scale-85">
        <div>Name</div>
        <div>desc</div>
      </div>
      <div className="flex flex-col min-w-[30vw] aspect-[5/4] bg-red-400 scale-85 skew-x-1">
        <div>Name</div>
        <div>desc</div>
      </div>
      <div className="flex flex-col min-w-[30vw] aspect-[5/4] bg-red-400">
        <div>Name</div>
        <div>desc</div>
      </div>
      <div className="flex flex-col min-w-[30vw] aspect-[5/4] bg-red-400 scale-85">
        <div>Name</div>
        <div>desc</div>
      </div>
      <div className="absolute top-1 right-1">Button</div>
    </div>
  );
};

export default ServiceCarousel;
