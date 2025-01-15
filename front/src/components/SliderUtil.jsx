
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flightss from "../pages/admin/flight/Flightss";

const SliderUtil = ({ flight }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {flight?.map((flight) => (
        <Flightss key={flight._id} flight={flight} />
      ))}
    </Slider>
  );
};

export default SliderUtil;