import "../../../Grid/Grid.css";
import "./ProductPage.scss";
import { ProductCard } from "../../Products/ProductCards/ProductCard";
import { SaleProductCard } from "../../Products/ProductCards/SaleProductCard";
import { FilterBrand } from "./SideBar/Filters/FilterBrand";
import { FilterPrice } from "./SideBar/Filters/FilterPrice";
import { SortProduct } from "./SideBar/Filters/SortProduct";
import { PaginationPr } from "../../Pagination/Pagination";
import { useContext, useState } from "react";
import { Loading } from "../../Loading/Loading";
import { productContext } from "../../../Contexts/ProductContext";

function ProductPage() {
  const {
    loading,
    products,
    setFilterProducts,
    filterProducts,
    typeName,
    setTypeName,
    setCurrentPage,
    currentPage,
    productPerPage,
  } = useContext(productContext);

  const [sortValue, setSortValue] = useState();

  //Pagination-Product.
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
          allProducts={products}
          setFilterProducts={setFilterProducts}
          setSortValue={setSortValue}
          sortValue={sortValue}
          setTypeName={setTypeName}
        />
        <div className="productPage_container grid wide">
          <div className="productPage_body row no-gutters">
            <div className="col l-2 filter_Product">
              <FilterBrand
                allProducts={products}
                setFilterProducts={setFilterProducts}
                setTypeName={setTypeName}
              />

              <FilterPrice
                allProducts={products}
                setFilterProducts={setFilterProducts}
                setTypeName={setTypeName}
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
                        productId={product.id}
                      />
                    </div>
                  ) : (
                    <div className="col l-3 m-3 c-12" key={index}>
                      <ProductCard
                        name={product.name}
                        URL={product.URL}
                        price={product.price}
                        productId={product.id}
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
