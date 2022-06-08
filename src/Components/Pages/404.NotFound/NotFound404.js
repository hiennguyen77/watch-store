import { Link } from "react-router-dom";
import "./NotFound404.scss";
export const NotFound404 = () => {
  return (
    <>
      <div className="notFound_wrap">
        <h1>Không tìm thấy trang</h1>
        <p>Xin lỗi, chúng tôi không tìm thấy trang này</p>
        <Link className='notFound-link' to="/">
          <h4>Về lại trang chủ</h4>
          <div className="notFound_line"></div>
        </Link>
      </div>
    </>
  );
};
