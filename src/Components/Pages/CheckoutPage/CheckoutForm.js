import { useState } from "react";
import { Radio } from "antd";
import "antd/dist/antd.css";

import Select from "react-select";
import { getProvinces, getDistricts, getWards } from "./CheckoutFormUtils";
import "./CheckoutForm.scss";
// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

export const CheckoutForm = () => {
  const [valueChecked, setValueChecked] = useState(1);
  const [nameInput, setNameInput] = useState("");
  const [phone, setPhone] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [district, setDistrict] = useState([]);
  const [wards, setWards] = useState([]);
  const [street, setStreet] = useState("");
  const [info, setInfo] = useState([]);

  const handleChecked = (e) => {
    console.log("radio checked", e.target.value);
    setValueChecked(e.target.value);
  };

  console.log(nameInput, phone, provinces, district, wards, street);
  const handleSubmitInfo = (e) => {
    e.preventDefault();
    setInfo({
      valueChecked,
      nameInput,
      phone,
      provinces,
      district,
      wards,
      street,
    });
  };
  console.log(info);

  return (
    <>
      <form className="form_wrap" onSubmit={handleSubmitInfo}>
        <div className="form_radio">
          <Radio.Group onChange={handleChecked} value={valueChecked}>
            <Radio value="male">Anh</Radio>
            <Radio value="female">Chị</Radio>
          </Radio.Group>
        </div>
        <div className="form_input-name-phone">
          <input
            className="input_style"
            placeholder="Họ và tên"
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
          />
          <input
            className="input_style"
            placeholder="Số diện thoại"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <h4>Địa chỉ giao hàng</h4>
        <div className="select_address">
          <Select
            placeholder="Chọn tỉnh, thành phố"
            Value={provinces}
            onChange={setProvinces}
            options={getProvinces()}
            className="select_style"
          />
          <Select
            placeholder="Chọn quận, huyện"
            Value={district}
            onChange={setDistrict}
            noOptionsMessage={() => "Bạn chưa chọn tỉnh, thành"}
            options={getDistricts(provinces?.value)}
            className="select_style"
          />
          <Select
            placeholder="Chọn xã, phường"
            Value={wards}
            onChange={setWards}
            noOptionsMessage={() => "Bạn chưa chọn quận, huyện"}
            options={getWards(district?.value)}
            className="select_style"
          />

          <input
            className="input_style"
            placeholder="Số nhà, tên đường"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
        </div>
      </form>
    </>
  );
};
