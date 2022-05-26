import "../../../Grid/Grid.css";
import "./ProductPage.scss";
import { ProductCard } from "../../Products/ProductCards/ProductCard";
import { SaleProductCard } from "../../Products/ProductCards/SaleProductCard";
import { FilterBrand } from "./SideBar/Filters/FilterBrand";
import { FilterPrice } from "./SideBar/Filters/FilterPrice";
import { SortProduct } from "./SideBar/Filters/SortProduct";
import { PaginationPr } from "../../Pagination/Pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "../../Loading/Loading";

function ProductPage(props) {
  const { productType, typeName } = props;
  const { loading, setLoading } = props;
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);

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
        setFilterProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProductPage();
  }, [productType]);

  const indexOfLastPr = currentPage * productPerPage;
  const indexOfFistPr = indexOfLastPr - productPerPage;
  const currentPr = filterProducts.slice(indexOfFistPr, indexOfLastPr);

  return (
    <>
      {loading && <Loading />}
      <div className="productPage_wrap">
        <div className="productPage_heading">
          <h1 className="productPage_heading_content">{typeName}</h1>
        </div>
        <SortProduct
          allProducts={allProducts}
          setFilterProducts={setFilterProducts}
        />
        <div className="productPage_container grid wide">
          <div className="productPage_body row no-gutters">
            <div className="col l-2 filter_Product">
              <FilterBrand
                allProducts={allProducts}
                setFilterProducts={setFilterProducts}
              />

              <FilterPrice
                allProducts={allProducts}
                setFilterProducts={setFilterProducts}
              />
            </div>
            <div className="col l-10">
              <div className="productPage_product row no-gutters">
                {currentPr.map((product, index) =>
                  product.salePrice ? (
                    <div className="col l-3 m-3 c-12" key={index}>
                      <SaleProductCard
                        name={product.name}
                        URL={product.URL}
                        price={product.price}
                        salePrice={product.salePrice}
                      />
                    </div>
                  ) : (
                    <div className="col l-3 m-3 c-12" key={index}>
                      <ProductCard
                        name={product.name}
                        URL={product.URL}
                        price={product.price}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <PaginationPr
            filterProducts={filterProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
export default ProductPage;
