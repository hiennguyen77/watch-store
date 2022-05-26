import "./SortProduct.scss";
import { useState } from "react";

export const SortProduct = (props) => {
  return (
    <>
      <select className="productPage_sort">
        <option>Tất cả</option>
        <option>Giá : Tăng dần</option>
        <option>Giá : Giảm dần</option>
        <option>Từ : A-Z</option>
        <option>Từ : Z-A</option>
      </select>
    </>
  );
};
