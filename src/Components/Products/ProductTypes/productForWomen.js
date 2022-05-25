import "./productForWomen.scss";
import { ProductCard } from "../ProductCards/ProductCard";
import { SaleProductCard } from "../ProductCards/SaleProductCard";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProductForWomen() {
  const [productForWomens, setProductForWomens] = useState([]);
  useEffect(() => {
    const getProductForWomen = async () => {
      try {
        const res = await axios.get(
          "https://6273e9663d2b5100742474a5.mockapi.io/productWomens"
        );
        setProductForWomens(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProductForWomen();
  }, []);

  return (
    <>
      <div className="productForWomen_wrap">
        <div className="productForWomen_heading">
          <h1 className="productForWomen_name">Đồng hồ nữ</h1>
        </div>
        <div className="productForWomen_container grid wide">
          <div className="productForWomen_item row ">
            <div className="col l-12 m-0 c-0 ">
              <Link to="">
                <div className="productForWomen_img_container">
                  <img
                    className="productForWomen_img"
                    alt=""
                    src="https://vcdn-giadinh.vnecdn.net/2020/07/29/1550293691-dong-ho-julius-ja11-5742-4899-1596018410.jpg"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="row productForWomen_row">
            {productForWomens.map((productForWomen, index) =>
              productForWomen.salePrice ? (
                <div className="col l-3 m-4 c-12 " key={index}>
                  <SaleProductCard
                    name={productForWomen.name}
                    URL={productForWomen.URL}
                    price={productForWomen.price}
                    salePrice={productForWomen.salePrice}
                  />
                </div>
              ) : (
                <div className="col l-3 m-4 c-12 " key={index}>
                  <ProductCard
                    name={productForWomen.name}
                    URL={productForWomen.URL}
                    price={productForWomen.price}
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