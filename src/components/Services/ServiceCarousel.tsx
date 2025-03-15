import { ServiceCarouselProps } from '../../types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', background: 'gray', borderRadius: '100vw' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', background: 'gray', borderRadius: '100vw' }} onClick={onClick} />;
}

const ServiceCarousel = ({ items }: ServiceCarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="sm:w-[85vw] w-[90vw] mx-auto">
      <Slider {...settings}>
        {items.map((service, index) => (
          <div key={index} className={`relative flex flex-col min-w-[30vw] aspect-[5/4] shadow-2xl rounded-md scale-90`}>
            <div>
              <img className="h-full w-full object-cover rounded-md" src={service.image} alt="service-image" />
            </div>
            <div className="absolute bg-black/65 text-white bottom-0 p-4 rounded-b-md">
              <div className="text-2xl text-center font-extrabold">{service.name}</div>
              <div className="text-lg text-center">{service.description}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
