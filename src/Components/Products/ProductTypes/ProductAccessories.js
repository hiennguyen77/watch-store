import "./ProductAccessories.scss";
import { ProductCard } from "../ProductCards/ProductCard";
import { SaleProductCard } from "../ProductCards/SaleProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { memo } from "react";
// import axios from "axios";

function ProductAccessories(props) {
  const { products } = props;

  const accessoryPr = products.filter((product) => {
    return product.item === "accessory";
  });

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
      <div className="productAccessories_wrap">
        <div className="productAccessories_heading">
          <h1 className="productAccessories_name">Phụ kiện đồng hồ</h1>
        </div>
        <div className="productAccessories_container grid wide">
          <div className="productAccessories_item row sm-gutter ">
            <div className="col l-12 m-12 c-0">
              <Slider {...settings}>
                {accessoryPr.map((productAccessories, index) =>
                  productAccessories.salePrice ? (
                    <SaleProductCard
                      key={index}
                      name={productAccessories.name}
                      URL={productAccessories.URL}
                      price={productAccessories.price}
                      salePrice={productAccessories.salePrice}
                    />
                  ) : (
                    <ProductCard
                      key={index}
                      name={productAccessories.name}
                      URL={productAccessories.URL}
                      price={productAccessories.price}
                    />
                  )
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(ProductAccessories);
