import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { formatVnd } from "../../../helper";
import { cartContext } from "../../../Contexts/CartContext";

export const ProductCard = (props) => {
  const { name, URL, price, productId } = props;
  const { setProductDetail } = useContext(cartContext);

  console.log(price);
  return (
    <>
      <div
        className="product_card_wrap"
        onClick={() => {
          setProductDetail({ name, URL, price, productId });
        }}
      >
        <div className="product_card_container">
          <Link to="/product_detail" className="product_card_link">
            <img className="product_card_img" src={URL} alt="" />
          </Link>
          <div className="product_card_price">
            <h6 title={name} className="product_card_name">
              {name}
            </h6>
            <h4>{formatVnd(price)}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
