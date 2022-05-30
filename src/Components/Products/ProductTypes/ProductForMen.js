import "./ProductForMen.scss";
import { ProductCard } from "../ProductCards/ProductCard";
import { SaleProductCard } from "../ProductCards/SaleProductCard";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

export function ProductForMen(props) {
  const { products } = props;
  const menProduct = products.filter((product) => {
    return product.item === "male";
  });

  return (
    <>
      <div className="productForMen_wrap">
        <div className="productForMen_heading">
          <h1 className="productForMen_name">Đồng hồ nam</h1>
        </div>
        <div className="productForMen_container grid wide">
          <div className="productForMen_item row sm-gutter">
            <div className="col l-12 m-0 c-0 ">
              <Link to="">
                <div className="productForMen_img_container">
                  <img
                    className="productForMen_img"
                    alt=""
                    src="https://sc02.alicdn.com/kf/HTB1x6VmQMDqK1RjSZSyq6yxEVXaY.jpg"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="productForMen_row row  ">
            {menProduct.map((productForMen, index) =>
              productForMen.salePrice ? (
                <div className="col l-3 m-4 c-12 " key={index}>
                  <SaleProductCard
                    name={productForMen.name}
                    URL={productForMen.URL}
                    price={productForMen.price}
                    salePrice={productForMen.salePrice}
                  />
                </div>
              ) : (
                <div className="col l-3 m-4 c-12 " key={index}>
                  <ProductCard
                    name={productForMen.name}
                    URL={productForMen.URL}
                    price={productForMen.price}
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
