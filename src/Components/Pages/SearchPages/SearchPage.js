import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../../Grid/Grid.css";
import { FiSearch } from "react-icons/fi";
import { ProductCard } from "../../Products/ProductCards/ProductCard";
import { PaginationPr } from "../../Pagination/Pagination";

import "./SearchPage.scss";
import { productContext } from "../../../Contexts/ProductContext";

export const SearchPage = (props) => {
  const { products } = useContext(productContext);
  const [inputValue, setInputValue] = useState("");
  const [filterPrs, setFilterPrs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(15);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const filterPr = products.filter((product) => {
      return product.name.toLowerCase().includes(inputValue);
    });
    setFilterPrs(filterPr);
    setInputValue("");
  };

  //Pagination-Search
  const indexOfLastPr = currentPage * productPerPage;
  const indexOfFistPr = indexOfLastPr - productPerPage;
  const currentPr = filterPrs.slice(indexOfFistPr, indexOfLastPr);

  return (
    <>
      <div className="searchPage_wrap" onSubmit={handleSubmitSearch}>
        <form className="inputSearch_container">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="inputSearch"
            type="text"
            placeholder="Tìm kiếm..."
          />
          <i className="searchPage_icon">
            <FiSearch style={inputValue ? { color: "#d60f0f" } : {}} />
          </i>
        </form>
        <div className="grid wide">
          <div className="row sm-gutter">
            {filterPrs.length > 0 ? (
              currentPr.map((product, index) => (
                <div className="col l-2-4 m-3 c-12" key={index}>
                  <ProductCard
                    name={product.name}
                    URL={product.URL}
                    price={product.price}
                    productId={product.id}
                  />
                </div>
              ))
            ) : (
              <div className="noProduct">
                <div className="noProduct_container">
                  <h5>Không tìm thấy sản phẩm phù hợp</h5>
                  <Link to="/product" className="noProduct_link">
                    <h4>Tiếp tục mua sắm</h4>
                    <div className="noProduct_line"></div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        {filterPrs.length > 15 ? (
          <PaginationPr
            filterProducts={products}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
