import "../../../Grid/Grid.css";
import "./ProductDetail.scss";

export const ProductDetail = (props) => {
  const { productDetailName, productDetailPrice, productDetailImg } = props;
  console.log(productDetailName, productDetailPrice, productDetailImg);
  return (
    <>
      <div className="productsDetail_wrap">
        <div className="productsDetail_container grid wide">
          <div className="productDetail_pr row sm-gutter">
            <div className="productDetail_left col l-6">
              <img src="" alt="" />
            </div>
            <div className="productDetail_right col l-6">
              <div className="productDetail_right-contain">
                <h1>name</h1>
                <h2>price</h2>
                <h1>COUNTER</h1>
                <div className="productDetail_right-btn">
                  <button className="add_product-btn">Thêm giỏ hàng</button>
                  <button className="checkout_product-btn">Thanh toán</button>
                </div>
                <div className="productDetail_describe">MÔ tả sp</div>
              </div>
            </div>
          </div>

          <div className="productDetail_more row sm-gutter">Table</div>

          <div className="productDetail_related row sm-gutter">
            <div>SP LIÊN QUAN</div>
          </div>
        </div>
      </div>
    </>
  );
};
