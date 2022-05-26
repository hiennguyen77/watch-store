import "./SortProduct.scss";
import { BsChevronDown } from "react-icons/bs";
import { sorting } from "./filterPrice-data";
import { useState } from "react";

export const SortProduct = (props) => {
  const { allProducts, setFilterProducts, setSortValue } = props;

  return (
    <>
      <div className="sortProduct_wrap">
        <div className="sort_container">
          <div className="sortproduct_screen">
            <p>-- Lọc sản phẩm --</p>
          </div>
          <div className="sortProduct_icon">
            <i>
              <BsChevronDown />
            </i>
          </div>
        </div>

        <div className="sortProduct_menu">
          <ul className="sorProduct_list">
            {sorting.map((sort, index) => (
              <li
                onClick={() => sort.value(props, setSortValue)}
                className="sortProduct_item"
                key={index}
              >
                {sort.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
