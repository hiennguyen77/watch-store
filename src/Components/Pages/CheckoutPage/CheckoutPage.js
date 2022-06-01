import React, { useState } from "react";
import "../../../Grid/Grid.css";

import "./CheckoutPage.scss";
import { CheckoutForm } from "./CheckoutForm";

export const CheckoutPage = (props) => {
  return (
    <>
      <div className="checkout_wrap">
        <div className="checkout_container grid wide">
          <div className="checkout_btn">
            <button className="checkout_btn-back">Quay lại</button>
            <button className="checkout_btn-next">
              Chọn phương thức thanh toán
            </button>
          </div>
          <div className="checkout_form">
            <h3>Thông tin giao hàng</h3>
            <CheckoutForm />

            <p>SẢN PHẨM ĐÃ MUA</p>
            <div className="info_product">
              <img src="" alt="" />
              <div className="info_name_amount">
                <h4>name</h4>
                <p>amount</p>
              </div>
              <h4>price</h4>
            </div>
            <div className="total_price">
              <h4>Tổng tiền : </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
