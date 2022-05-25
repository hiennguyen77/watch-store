import "./HeaderMenuPr.scss";
import { Link } from "react-router-dom";
import { productContext } from "../../../../../App";
import { useContext } from "react";

const productTypes = [
  { typeName: "Tất cả", type: "products" },
  { typeName: "Đồng hồ nam", type: "productForMens", item: "male" },
  { typeName: "Đồng hồ nữ", type: "productWomens", item: "female" },
  { typeName: "Phụ kiện", type: "accessorys", item: "accessory" },
];

export function HeaderMenuPr(props) {
  const { menuScroll } = props;
  const handleProduct = useContext(productContext);

  return (
    <>
      <div
        className={
          menuScroll
            ? "menu_wrap menu_wrapScroll"
            : "menu_wrap menu_wrapDefault"
        }
      >
        <div className="menu_container">
          <ul className="menu_list">
            {productTypes.map((productType, index) => (
              <li
                className="menu_item "
                key={index}
                onClick={() =>
                  handleProduct(productType.type, productType.typeName)
                }
              >
                <Link className="menu_link" to="/product">
                  <h6>{productType.typeName}</h6>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
