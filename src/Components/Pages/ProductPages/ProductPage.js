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
import { BsChevronDown } from "react-icons/bs";

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
  const [openFilter, setOpenFilter] = useState(false);

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
        <div className="product_sort">
          <SortProduct
            allProducts={products}
            setFilterProducts={setFilterProducts}
            setSortValue={setSortValue}
            sortValue={sortValue}
            setTypeName={setTypeName}
          />
        </div>
        <div className="productPage_container">
          <div className="productPage_body">
            <div
              onClick={() => setOpenFilter(!openFilter)}
              className="filter_btn"
            >
              <p>
                -- Bộ lọc sản phẩm --
                <BsChevronDown className="filter_btn_icon" />
              </p>
            </div>
            {openFilter && (
              <div className=" filter_Product">
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
            )}
            <div className=" filter_Product_medium">
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

            <div className="productPage_product grid ">
              <div className="productPage_row row sm-gutter ">
                {currentPr.map((product, index) =>
                  product.salePrice ? (
                    <div
                      style={{ display: "flex", justifyContent: "center" }}
                      className="productPage_item col l-3 m-4 c-6"
                      key={index}
                    >
                      <SaleProductCard
                        name={product.name}
                        URL={product.URL}
                        price={product.price}
                        salePrice={product.salePrice}
                        productId={product.id}
                      />
                    </div>
                  ) : (
                    <div
                      style={{ display: "flex", justifyContent: "center" }}
                      className="productPage_item col l-3 m-4 c-6"
                      key={index}
                    >
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
