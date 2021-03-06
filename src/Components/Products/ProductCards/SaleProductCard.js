import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../Contexts/CartContext";
import { formatVnd } from "../../../helper";

export const SaleProductCard = (props) => {
  const { setProductDetail } = useContext(cartContext);
  const { name, URL, price, salePrice, productId } = props;

  return (
    <>
      <div
        className="product_card_wrap"
        onClick={() => setProductDetail({ URL, name, price, productId })}
      >
        <div className="product_card_container">
          <Link to="/product_detail" className="product_card_link">
            <img className="product_card_img" src={URL} alt="" />
          </Link>
          <div className="product_card_price">
            <h6 title={name} className="product_card_name">
              {name}
            </h6>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4>{formatVnd(salePrice)}</h4>
              <p>{formatVnd(price)}đ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
