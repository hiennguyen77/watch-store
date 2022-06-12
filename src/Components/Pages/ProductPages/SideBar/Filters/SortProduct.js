import { useState } from "react";
import "./SortProduct.scss";
import { BsChevronDown } from "react-icons/bs";
import { sorting } from "./filterPrice-data";

export const SortProduct = (props) => {
  const { setSortValue, sortValue } = props;
  const [openSort, setOpenSort] = useState(false);

  return (
    <>
      <div onClick={() => setOpenSort(!openSort)} className="sortProduct_wrap">
        <div className="sort_container">
          <div className="sortproduct_screen">
            <p>-- Sắp xếp --</p>
          </div>
          <div className="sortProduct_icon">
            <i>
              <BsChevronDown />
            </i>
          </div>
        </div>

        {openSort && (
          <div className="sortProduct_menu">
            <ul className="sorProduct_list">
              {sorting.map((sort, index) => (
                <li
                  onClick={() => {
                    setSortValue(sort.value);
                    sort.callback(props);
                  }}
                  className={
                    sortValue === sort.value ? "active" : "sortProduct_item"
                  }
                  key={index}
                >
                  {sort.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
