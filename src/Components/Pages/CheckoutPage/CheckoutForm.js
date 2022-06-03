import { useState } from "react";
import { Radio } from "antd";
import "antd/dist/antd.css";
import { Select, Input } from "antd";

const { Option } = Select;

export const CheckoutForm = () => {
  const [valueChecked, setValueChecked] = useState(1);

  const handleChecked = (e) => {
    console.log("radio checked", e.target.value);
    setValueChecked(e.target.value);
  };
  return (
    <>
      <div className="form_wrap">
        <div className="form_radio">
          <Radio.Group onChange={handleChecked} value={valueChecked}>
            <Radio value={1}>Anh</Radio>
            <Radio value={2}>Chị</Radio>
          </Radio.Group>
        </div>
        <div className="form_input-name-phone">
          <Input
            placeholder="Họ và tên"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
          <Input
            placeholder="Số diện thoại"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
        </div>
        <h4>Địa chỉ giao hàng</h4>
        <div className="select_address">
          <Select
            style={{
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            placeholder="Tỉnh/ Thành phố"
          >
            <Option value="1">Not Identified</Option>
          </Select>
          <Select
            style={{
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            placeholder="Quận/ Huyện"
          >
            <Option value="1">Not Identified</Option>
          </Select>
          <Select
            style={{
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
            placeholder="Xã/ Phường"
          >
            <Option value="1">Not Identified</Option>
          </Select>

          <Input
            placeholder="Địa chỉ cụ thể"
            style={{
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
        </div>
      </div>
    </>
  );
};
