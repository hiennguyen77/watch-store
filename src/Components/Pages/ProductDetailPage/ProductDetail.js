import "../../../Grid/Grid.css";
import "./ProductDetail.scss";
import { Link } from "react-router-dom";
import { AmountCounter } from "./AmountCounter";
import { Idea } from "./Idea";
import { RelateProduct } from "./RelateProduct";
import { ProductBtn } from "../../ProductBtn/ProductBtn";

// import { useState, useContext } from "react";
// import { addCart } from "../../../App";

export const ProductDetail = (props) => {
  const { products, productDetailName, productDetailPrice, productDetailImg } =
    props;

  // console.log(productDetailName, productDetailPrice, productDetailImg);
  return (
    <>
      <div className="productsDetail_wrap">
        <div className="productsDetail_container grid wide">
          <div className="productDetail_pr row sm-gutter">
            <div className="productDetail_left col l-6">
              <img src={productDetailImg} alt="watch-img" />
            </div>
            <div className="productDetail_right col l-6">
              <div className="productDetail_right-contain">
                <h1>{productDetailName}</h1>
                <h2>{productDetailPrice}đ</h2>
                <div>
                  <AmountCounter />
                </div>
                <ProductBtn>
                  <Link to="/cart">
                    <button className=" product_btn add_product-btn">
                      Thêm giỏ hàng
                    </button>
                  </Link>
                  <Link to="/checkout">
                    <button className=" product_btn checkout_product-btn">
                      Thanh toán
                    </button>
                  </Link>
                </ProductBtn>

                <div className="productDetail_describe">
                  <h3>Mô tả</h3>
                  <ul>
                    <li>Mặc hàng: Đồng hồ cao cấp</li>
                    <li>Xuất xứ: Châu Âu</li>
                    <li>Thương hiệu: LONGINES</li>
                    <li>Chất liệu: Hàng đầu thế giới</li>
                    <li>
                      Sản phẩm bao gồm: một đồng hồ cao cấp, một bộ dây da đi
                      kèm, một bộ pin.
                    </li>
                    <li>
                      Có thể đổi trả khi hàng có sự cố trong quá trình vận
                      chuyển, hoàn tiền 100% nếu sản phẩm không giống hình hoặc
                      hàng giả hàng kém chất lượng..
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="productDetail_more ">
            <Idea />
          </div>

          <div className="productDetail_related">
            <h2>Sản phẩm liên quan</h2>
            <RelateProduct products={products} />
          </div>
        </div>
      </div>
    </>
  );
};
