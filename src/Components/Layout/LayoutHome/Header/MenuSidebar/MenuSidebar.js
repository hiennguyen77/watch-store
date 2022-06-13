import { useState, useContext } from "react";
import "./MenuSidebar.scss";
import { Link } from "react-router-dom";
import { BsChevronDown, BsX } from "react-icons/bs";
import { productTypes } from "../HeaderMenus/HeaderMenuPr";
import { brands } from "../HeaderMenus/HeaderMenuBrand";
import { productContext } from "../../../../../Contexts/ProductContext";
export const MenuSidebar = (props) => {
  const [openMenuProduct, setOpenMenuProduct] = useState(false);
  const [openMenuBrand, setOpenMenuBrand] = useState(false);
  const { openMenuBar, setOpenMenuBar } = props;

  const { handleProduct, setFilterProducts, products, setTypeName } =
    useContext(productContext);

  const handleAllProduct = () => {
    setTypeName("Tất cả");
    setFilterProducts(products);
    setOpenMenuBar(!openMenuBar);
  };
  return (
    <>
      {openMenuBar && (
        <div>
          <div
            onClick={() => setOpenMenuBar(!openMenuBar)}
            className="menuSidebar_modal"
          ></div>

          <div className="menuSidebar_wrap">
            <div
              onClick={() => setOpenMenuBar(!openMenuBar)}
              className="icon_close"
            >
              <i>
                <BsX />
              </i>
            </div>
            <div className="menuSidebar_container">
              <div
                onClick={() => setOpenMenuBar(!openMenuBar)}
                className="menuContent menu_home"
              >
                <Link to="/">
                  <h4>Trang chủ</h4>
                </Link>
              </div>
              <div
                onClick={() => setOpenMenuProduct(!openMenuProduct)}
                className="menuContent menu_product"
              >
                <h4>
                  Sản phẩm
                  <BsChevronDown className="icon_down_product" />
                </h4>
              </div>

              {openMenuProduct && (
                <div className="menu_product_container">
                  <ul>
                    <li onClick={handleAllProduct}>
                      <Link to="/product">
                        <p>Tất cả</p>
                      </Link>
                    </li>

                    {productTypes.map((productType, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          handleProduct(productType.item, productType.typeName);
                          setOpenMenuBar(!openMenuBar);
                        }}
                      >
                        <Link to="/product">
                          <p>{productType.typeName}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div
                onClick={() => setOpenMenuBrand(!openMenuBrand)}
                className="menuContent menu_brand"
              >
                <h4>
                  Nhãn hiệu <BsChevronDown className="icon_down_brand" />
                </h4>
              </div>
              {openMenuBrand && (
                <div className="menu_brand_container">
                  <ul>
                    {brands.map((brand, index) => (
                      <li key={index}>
                        <Link to="/brand">
                          <p>{brand.brandName}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div
                onClick={() => setOpenMenuBar(!openMenuBar)}
                className="menuContent menu_about"
              >
                <Link to="/about">
                  <h4>Giới thiệu</h4>
                </Link>
              </div>
              <div
                onClick={() => setOpenMenuBar(!openMenuBar)}
                className="menuContent menu_blog"
              >
                <Link to="/blog">
                  <h4>Blog</h4>
                </Link>
              </div>
              <div
                onClick={() => setOpenMenuBar(!openMenuBar)}
                className="menuContent menu_contact"
              >
                <Link to="/contact">
                  <h4>Liên hệ</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
