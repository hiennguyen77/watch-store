import { useState } from "react";
import { Radio } from "antd";
import './FilterPrice.scss'

export const FilterPrice = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <div className="filterPrice_wrap">
        <div className="filterPrice_name">
          <h1 className='filterPrice_heading'>Giá -</h1>
        </div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>
            <p>Toàn bộ</p>
          </Radio>
          <Radio value={2}>
            <p>500.000 - 1000.000đ</p>
          </Radio>
          <Radio value={3}>
            <p>1.500.000-2000.000đ</p>
          </Radio>
          <Radio value={4}>
            <p>Trên 3000.000đ</p>
          </Radio>
        </Radio.Group>
      </div>
    </>
  );
};
