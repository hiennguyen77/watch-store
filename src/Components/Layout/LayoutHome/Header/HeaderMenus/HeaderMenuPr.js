import "./HeaderMenuPr.scss";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { productContext } from "../../../../../Contexts/ProductContext";

const productTypes = [
  // { typeName: "Tất cả", type: "products" },
  { typeName: "Đồng hồ nam", type: "productForMens", item: "male" },
  { typeName: "Đồng hồ nữ", type: "productWomens", item: "female" },
  { typeName: "Phụ kiện", type: "accessorys", item: "accessory" },
];

export function HeaderMenuPr(props) {
  const { menuScroll } = props;
  const { handleProduct, setFilterProducts, products, setTypeName } =
    useContext(productContext);

  const handleAllProduct = () => {
    setTypeName("Tất cả");
    setFilterProducts(products);
  };

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
            <li className="menu_item" onClick={handleAllProduct}>
              <Link to="/product" className="menu_link">
                <h6>Tất cả</h6>
              </Link>
            </li>
            {productTypes.map((productType, index) => (
              <li
                className="menu_item "
                key={index}
                onClick={() =>
                  handleProduct(productType.item, productType.typeName)
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
