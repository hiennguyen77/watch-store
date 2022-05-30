import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import "./BreadCumb.scss";

const paths = {
  product: "Sản phẩm",
  about: "Giới thiệu",
  brand: "Nhãn hiệu",
  blog: "Blog",
  contact: "Liên hệ",
  search: "Tìm kiếm",
  cart: "Giỏ hàng",
  product_detail: "Chi tiết sản phẩm",
  checkout: "Thanh toán",
};

const BreadCrumb = () => {
  const location = useLocation();
  const BreadCrumbView = () => {
    const { pathname } = location;
    const pathNames = pathname.split("/").filter((item) => item);
    // const upperCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    // const upperCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div>
        <Breadcrumb>
          {pathNames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Trang chủ</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          )}

          {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathNames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={index}>{paths[name]}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link to={`${routeTo}`}>{paths[name]}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    );
  };
  return <>{BreadCrumbView()}</>;
};

export default BreadCrumb;
