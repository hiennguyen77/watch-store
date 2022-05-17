import "./productForWomen.scss";
import { ProductForWomenCard } from "../ProductCards/ProductCard";
import { Link } from "react-router-dom";

export function ProductForWomen() {
  return (
    <>
      <div className="productForWomen_wrap">
        <div className="productForWomen_heading">
          <h1 className="productForWomen_name">Đồng hồ nữ</h1>
        </div>
        <div className="productForWomen_container grid wide">
          <div className="productForWomen_item row ">
            

            <div className="col l-12 m-0 c-0 ">
              <Link to="">
                <div className="productForWomen_img_container">
                  <img
                    className="productForWomen_img"
                    alt=""
                    src="https://vcdn-giadinh.vnecdn.net/2020/07/29/1550293691-dong-ho-julius-ja11-5742-4899-1596018410.jpg"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div className="row productForWomen_row">
            <div className="col l-3 m-4 c-12 ">
              <ProductForWomenCard />
            </div>
            <div className="col l-3 m-4 c-12 ">
              <ProductForWomenCard />
            </div>
            <div className="col l-3 m-4 c-12 ">
              <ProductForWomenCard />
            </div>
            <div className="col l-3 m-4 c-12 ">
              <ProductForWomenCard />
            </div>
            <div className="col l-3 m-4 c-12 ">
              <ProductForWomenCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
