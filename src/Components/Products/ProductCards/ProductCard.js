import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { productDetailContext } from "../../../App";
export const ProductCard = (props) => {
  const { name, URL, price } = props;
  const handleProductDetail = useContext(productDetailContext);

  return (
    <>
      <div
        className="product_card_wrap"
        onClick={() => handleProductDetail(URL, name, price)}
      >
        <div className="product_card_container">
          <Link to="/product_detail" className="product_card_link">
            <img className="product_card_img" src={URL} alt="" />
            <h6 className="product_card_name">{name}</h6>
          </Link>
          <div className="product_card_price">
            <h4>{price}đ</h4>
          </div>
        </div>
      </div>
    </>
  );
};
