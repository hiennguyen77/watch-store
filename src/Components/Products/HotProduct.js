import "./HotProduct.scss";
import { ProductCard } from "./ProductCards/ProductCard";
import { SaleProductCard } from "./ProductCards/SaleProductCard";
import { useState } from "react";
export function HotProduct(props) {
  const { products } = props;
  const hotProducts = products.slice(4, 8);

  return (
    <>
      <div className="HotProduct_wrap">
        <div className="HotProduct_heading">
          <h1 className="HotProduct_name">Sản phẩm bán chạy</h1>
        </div>
        <div className="HotProduct_type">
          <button>Đồng hồ nam</button>
          <button>Đồng hồ nữ</button>
          <button>Phụ kiện</button>
        </div>
        <div className="HotProduct_container ">
          <div className="HotProduct_item row sm-gutter">
            {hotProducts.map((hotProduct, index) =>
              hotProduct.salePrice ? (
                <div className="col l-3 m-4 c-12 " key={index}>
                  <SaleProductCard
                    name={hotProduct.name}
                    URL={hotProduct.URL}
                    price={hotProduct.price}
                    salePrice={hotProduct.salePrice}
                    productId={hotProduct.id}
                  />
                </div>
              ) : (
                <div className="col l-3 m-4 c-12 " key={index}>
                  <ProductCard
                    name={hotProduct.name}
                    URL={hotProduct.URL}
                    price={hotProduct.price}
                    productId={hotProduct.id}
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
