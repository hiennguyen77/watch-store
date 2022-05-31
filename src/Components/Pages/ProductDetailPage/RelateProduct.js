import "../../../Grid/Grid.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProductCard } from "../../Products/ProductCards/ProductCard";

export const RelateProduct = (props) => {
  const { products } = props;
  const relateProduct = products.slice(0, 5);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="relateProduct_wrap">
        <Slider {...settings}>
          {relateProduct.map((product, index) => (
            <div className="" key={index}>
              <ProductCard
                name={product.name}
                URL={product.URL}
                price={product.price}
                productId={product.id}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
