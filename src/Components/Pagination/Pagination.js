import "antd/dist/antd.css";
import { Pagination } from "antd";
import "./Pagination.scss";

export const PaginationPr = (props) => {
  const { filterProducts, currentPage, setCurrentPage } = props;

  const onChange = (page) => {
    // console.log(page);
    setCurrentPage(page);
  };
  return (
    <>
      <div className="pagination_wrap">
        <Pagination
          current={currentPage}
          onChange={onChange}
          total={filterProducts.length}
        />
        ;
      </div>
    </>
  );
};
