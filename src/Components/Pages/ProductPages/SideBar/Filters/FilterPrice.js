import { Radio } from "antd";
import "./FilterPrice.scss";
import { prices } from "./filterPrice-data";
import { useState } from "react";

export const FilterPrice = (props) => {
  // const { allProducts, setFilterProducts } = props;
  const [value, setValue] = useState(1);

  // const allPrice = (e) => {
  //   console.log(e.target.value);
  //   setValue(e.target.value);
  //   const filterPrice = allProducts.filter((product) => {
  //     return product.price < 1000000;
  //   });
  //   console.log(filterPrice);
  // };

  return (
    <>
      <div className="filterPrice_wrap">
        <div className="filterPrice_name">
          <h1 className="filterPrice_heading">Giá -</h1>
        </div>
        <div className="filterPriceBody">
          {prices.map((price) => (
            <Radio.Group
              key={price.key}
              onChange={() => price.callback(props, setValue)}
              // buttonStyle="solid"
              value={value}
              // checked={value === price.value}
            >
              <Radio value={price.value}>
                <p>{price.label}</p>
              </Radio>
            </Radio.Group>
          ))}
        </div>
      </div>
    </>
  );
};
