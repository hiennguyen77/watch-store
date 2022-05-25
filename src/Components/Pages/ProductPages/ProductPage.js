import "../../../Grid/Grid.css";
import "./ProductPage.scss";
import { ProductCard } from "../../Products/ProductCards/ProductCard";
import { FilterBrand } from "./SideBar/Filters/FilterBrand";
import { FilterPrice } from "./SideBar/Filters/FilterPrice";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductPage(props) {
  const { productType, typeName } = props;

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // allProducts
  // filteredProducts
  // all: 1 2 3 4 5 6 7 8 9 10
  // filter-so-chan: 2 4 6 8 10
  // filter-chan-lon-hon-5: 6 8 10
  // all->filter-so-chan->filter-lon-hon-5->ket-qua
  // all
  useEffect(() => {
    const getProductPage = async () => {
      try {
        const res = await axios.get(
          `https://6273e9663d2b5100742474a5.mockapi.io/${productType}`
        );
        setAllProducts(res.data);
        setFilteredProducts(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProductPage();
  }, [productType]);

  return (
    <>
      <div className="productPage_wrap">
        <div className></div>
        <div className="productPage_heading">
          <h1 className="productPage_heading_content">{typeName}</h1>
        </div>
        <select className="productPage_sort">
          <option>Tất cả</option>
          <option>Giá : Tăng dần</option>
          <option>Giá : Giảm dần</option>
          <option>Từ : A-Z</option>
          <option>Từ : Z-A</option>
        </select>
        <div className="productPage_container grid wide">
          <div className="productPage_body row no-gutters">
            <div className="col l-2">
              <FilterBrand
                allProducts={allProducts}
                setFilterProducts={setFilteredProducts}
              />

              <FilterPrice
                allProducts={allProducts}
                setFilterProducts={setFilteredProducts}
              />
            </div>
            <div className="col l-10">
              <div className="productPage_product row no-gutters">
                {filteredProducts.map((product, index) => (
                  <div className="col l-3 m-3 c-12" key={index}>
                    <ProductCard
                      name={product.name}
                      URL={product.URL}
                      price={product.price}
                      salePrice={product.salePrice}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
