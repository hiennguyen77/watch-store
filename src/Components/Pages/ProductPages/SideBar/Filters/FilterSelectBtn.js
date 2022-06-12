import { useContext, useState } from "react";
import "./FilterSelectBtn.scss";
import { FilterBrand } from "./FilterBrand";
import { FilterPrice } from "./FilterPrice";

import { BsChevronDown } from "react-icons/bs";
import { productContext } from "../../../../../Contexts/ProductContext";

export const FilterSelectBtn = () => {
  const { products, setFilterProducts, setTypeName } =
    useContext(productContext);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <div className="filterBtn">
        <div
          onClick={() => setOpenFilter(!openFilter)}
          className="filterBtn_name"
        >
          <p>-- Bộ lọc sản phẩm --</p>
          <i>
            <BsChevronDown />
          </i>
        </div>
        {openFilter && (
          <div className="filterBtn_menu">
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
      </div>
    </>
  );
};
