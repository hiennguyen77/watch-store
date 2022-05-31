import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./NewProduct.scss";
import { ProductCard } from "./ProductCards/ProductCard";
import { SaleProductCard } from "./ProductCards/SaleProductCard";
export function NewProduct(props) {
  const { products } = props;
  const newProducts = products.slice(0, 5);

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
      <div className="new_product_wrap grid wide">
        <div className="new_product_container ">
          <div className="new_product_heading">
            <h1 className="heading_name">Sản phẩm mới</h1>
          </div>
          <div className="row ">
            <div className="new_product_body col l-12 m-12 c-0">
              <div className="new_product_item">
                <Slider {...settings}>
                  {newProducts.map((newProduct, index) =>
                    newProduct.salePrice ? (
                      <SaleProductCard
                        key={index}
                        name={newProduct.name}
                        URL={newProduct.URL}
                        price={newProduct.price}
                        salePrice={newProduct.salePrice}
                        productId={newProduct.id}
                      />
                    ) : (
                      <ProductCard
                        key={index}
                        name={newProduct.name}
                        URL={newProduct.URL}
                        price={newProduct.price}
                        productId={newProduct.id}
                      />
                    )
                  )}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
