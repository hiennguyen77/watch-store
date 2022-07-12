import "../../../Grid/Grid.css";
import "./CartPage.scss";
import { useContext } from "react";
import { cartContext } from "../../../Contexts/CartContext";
import { AmountCounter } from "../ProductDetailPage/AmountCounter";
import { ProductBtn } from "../../ProductBtn/ProductBtn";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { formatVnd } from "../../../helper";

function CartPage() {
  const { cartProducts, amount, setAmount, handleDeleteCart, handleCheckout } =
    useContext(cartContext);

  const totalPrice = cartProducts.reduce((total, currentProduct) => {
    return total + parseInt(currentProduct.price * currentProduct.amount);
  }, 0);

  return (
    <>
      <div className="cartPage_wrap">
        <div className="cartPage_container grid wide">
          <div className="cartPage_text">
            <h1>Giỏ hàng của bạn</h1>
            <p>Bạn có {amount} sản phẩm trong giỏ hàng của bạn</p>
            {/* <div className="cartPage_line"></div> */}
          </div>
          {cartProducts.map((cartProduct, index) => (
            <div className="cartPage_product" key={index}>
              <div className="cart_img_info">
                <div className="cart_img">
                  <img src={cartProduct.URL} alt="" />
                </div>
                <div className="cart_info">
                  <h4>{cartProduct.name}</h4>
                  <AmountCounter
                    amount={cartProduct.amount}
                    setAmount={(newAmount) =>
                      setAmount(cartProduct.productId, newAmount)
                    }
                    className="cart_counter"
                  />
                </div>
              </div>
              <div className="cart_price_delete">
                <p>{formatVnd(cartProduct.price)}</p>
                <button onClick={() => handleDeleteCart(index)}>
                  <i>xóa</i>
                </button>
              </div>
            </div>
          ))}

          {cartProducts.length > 0 ? (
            <div>
              <div className="totalPrice">
                <p>Tổng tiền:</p>
                <h4>{formatVnd(totalPrice)}</h4>
              </div>
              <div className="cart_btn">
                <ProductBtn>
                  <Link to="/product">
                    <button className=" product_btn add_product-btn btn_size">
                      <TiArrowBackOutline className="cart_btn_pr" />
                      Tiếp tục mua hàng
                    </button>
                  </Link>
                  <Link to="/checkout">
                    <button
                      onClick={() => handleCheckout(totalPrice)}
                      className=" product_btn checkout_product-btn btn_size"
                    >
                      Thanh toán
                    </button>
                  </Link>
                </ProductBtn>
              </div>
            </div>
          ) : (
            <div className="noCart_container">
              <Link to="/product" className="noCart_link">
                <h2>Tiếp tục mua sắm</h2>
                <div className="noCart_line"></div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CartPage;
