// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import "./NewProduct.scss";
import { ProductCard } from "./ProductCards/ProductCard";
import { SaleProductCard } from "./ProductCards/SaleProductCard";
export function NewProduct(props) {
  const { products } = props;
  const newProducts = products.slice(0, 5);

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   // autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div className="new_product_wrap grid">
        <div className="new_product_container ">
          <div className="new_product_heading">
            <h1 className="heading_name">Sản phẩm mới</h1>
          </div>
          <div className="row ">
            {newProducts.map((newProduct, index) =>
              newProduct.salePrice ? (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  key={index}
                  className="new_product_body col l-3 m-4 c-6"
                >
                  <SaleProductCard
                    key={index}
                    name={newProduct.name}
                    URL={newProduct.URL}
                    price={newProduct.price}
                    salePrice={newProduct.salePrice}
                    productId={newProduct.id}
                  />
                </div>
              ) : (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  key={index}
                  className="new_product_body col l-3 m-4 c-6"
                >
                  <ProductCard
                    key={index}
                    name={newProduct.name}
                    URL={newProduct.URL}
                    price={newProduct.price}
                    productId={newProduct.id}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
