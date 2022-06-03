import React, { useState } from "react";
import "../../../Grid/Grid.css";

import "./CheckoutPage.scss";
import { CheckoutForm } from "./CheckoutForm";
import { cartContext } from "../../../Contexts/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const CheckoutPage = (props) => {
  const { cartProducts, totalPrice, setCartProducts } = useContext(cartContext);
  return (
    <>
      <div className="checkout_wrap">
        <div className="checkout_container grid wide">
          <div className="checkout_btn">
            <Link to="/cart">
              <button className="checkout_btn-back">
                <i>
                  <MdOutlineKeyboardArrowLeft className="checkout_btn_icon" />
                </i>
                Quay lại
              </button>
            </Link>
            <Link to="/product">
              <button
                onClick={() => setCartProducts([])}
                className="checkout_btn-next"
              >
                Chọn phương thức thanh toán
                <i>
                  <MdOutlineKeyboardArrowRight className="checkout_btn_icon" />
                </i>
              </button>
            </Link>
          </div>
          <div className="checkout_form">
            <h3>Thông tin giao hàng</h3>
            <CheckoutForm />

            <p>SẢN PHẨM ĐÃ MUA</p>
            {cartProducts.map((product, index) => (
              <div className="info_product" key={index}>
                <img src={product.URL} alt="" />
                <div className="info_name_amount">
                  <h4>{product.name}</h4>
                  <p>Số lượng: {product.amount}</p>
                </div>
                <h4>{product.price}đ</h4>
              </div>
            ))}
            <div className="total_price">
              <p>Tổng tiền: </p>
              <h4>{totalPrice}đ </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
