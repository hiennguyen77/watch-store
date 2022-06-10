import "./MenuSidebar.scss";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
export const MenuSidebar = () => {
  return (
    <>
      <div className="menuSidebar_wrap"></div>

      <div className="menuSidebar_container">
        <ul>
          <Link className="menuSidebar_home_link" to="/">
            <li>Trang chủ</li>
          </Link>
          <Link className="menuSidebar_product_link" to="/">
            <li>
              Sản phẩm <BsChevronDown />
              <div className="menu_product">
                <ul>
                  <li>Tất cả</li>
                  <li>Đồng hồ nam</li>
                  <li>Đồng hồ nữ</li>
                  <li>Phụ kiện</li>
                </ul>
              </div>
            </li>
          </Link>

          <Link className="menuSidebar_brand_link" to="/">
            <li>
              Nhãn hiệu <BsChevronDown />
              <div className="menu_brand">
                <ul>
                  <li>Tất cả</li>
                  <li>Đồng hồ nam</li>
                  <li>Đồng hồ nữ</li>
                  <li>Phụ kiện</li>
                </ul>
              </div>
            </li>
          </Link>

          <Link className="menuSidebar_about_link" to="/">
            <li>Giới thiệu</li>
          </Link>
          <Link className="menuSidebar_blog_link" to="/">
            <li>Blog</li>
          </Link>
          <Link className="menuSidebar_contact_link" to="/">
            <li>Liên hệ</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
