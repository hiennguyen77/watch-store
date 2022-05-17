import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import './BreadCumb.scss'

const BreadCrumb = () => {
  const location = useLocation();
  const BreadCrumbView = () => {
    const { pathname } = location;
    const pathNames = pathname.split("/").filter((item) => item);
    const upperCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div>
        <Breadcrumb>
          {pathNames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          )}
          {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathNames.length - 1;
            return isLast ? (
              <Breadcrumb.Item key={index}>{upperCase(name)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link to={`${routeTo}`}>{upperCase(name)}</Link>
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
