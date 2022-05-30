import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.scss";

const banners = [
  "https://sc02.alicdn.com/kf/HTB1x6VmQMDqK1RjSZSyq6yxEVXaY.jpg",
  "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/142347/Originals/thong-tin-Apple-Watch-Series-8-1.jpg",
  "https://www.mouawad.com/images/timepieces-gents-grand-ellipse/chrono-mono-poussoir-tourbillon-banner.jpg",
];
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export const Carousels = () => {
  return (
    <>
      <div>
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="carousel_wrap">
              <img className="img" src={banner} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
