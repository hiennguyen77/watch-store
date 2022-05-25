import "./ProductAccessories.scss";
import { ProductCard } from "../ProductCards/ProductCard";
import { SaleProductCard } from "../ProductCards/SaleProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect, memo } from "react";
import axios from "axios";

function ProductAccessories() {
  const [productAccessories, setProductAccessories] = useState([]);

  useEffect(() => {
    const getProductAccessories = async () => {
      try {
        const res = await axios.get(
          "https://6273e9663d2b5100742474a5.mockapi.io/accessorys"
        );
        setProductAccessories(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProductAccessories();
  }, []);

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
          <div className="productAccessories_item row ">
            <div className="col l-12 m-12 c-0">
              <Slider {...settings}>
                {productAccessories.map((productAccessories, index) =>
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
