import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../Contexts/CartContext";
import { productContext } from "../../../Contexts/ProductContext";

export const ProductCard = (props) => {
  const { name, URL, price, productId } = props;
  const { setProductDetail } = useContext(cartContext);
  const { setLoading } = useContext(productContext);

  return (
    <>
      <div
        className="product_card_wrap"
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setProductDetail({ name, URL, price, productId });
            setLoading(false);
          }, 500);
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
            <h4>{price}đ</h4>
          </div>
        </div>
      </div>
    </>
  );
};
