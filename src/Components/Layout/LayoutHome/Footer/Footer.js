import "../../../../Grid/Grid.css";
import { useState } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer_wrap">
        <div className="footer_container grid">
          <div className="row no-gutters">
            <div className="col l-3 m-4 c-6">
              <div className="footer_fist">
                <div className="footer_heading">
                  <h1>CHÍNH SÁCH PHÁP LÝ</h1>
                  <ul className="footer_list">
                    <li>
                      <Link
                        className="footer_link"
                        to="https://watch-store-chi.vercel.app/search"
                      >
                        Tìm kiếm
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="footer_link"
                        to="https://watch-store-chi.vercel.app/about"
                      >
                        Giới thiệu
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Chính sách bảo mật
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Chính sách đổi trả
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Điều khoản dịch vụ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col l-3 m-4 c-6">
              <div className="footer_fist">
                <div className="footer_heading">
                  <h1>DANH MỤC</h1>
                  <ul className="footer_list">
                    <li>
                      <Link className="footer_link" to="">
                        Trang chủ
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Sản phẩm
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Nhãn hiệu
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Giới thiệu
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col l-3 m-4 c-6">
              <div className="footer_fist">
                <div className="footer_heading">
                  <h1>ĐĂNG KÝ NHẬN THÔNG TIN</h1>
                  <p>
                    Đăng ký ngay để nhận thông tin khuyến mãi, các chương trình
                    quà tặng từ shop.
                  </p>
                  <form>
                    <input
                      placeholder="Nhập email của bạn."
                      className="footer_input"
                    />
                    <button>Đăng ký</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col l-3 m-4 c-6">
              <div className="footer_fist">
                <div className="footer_heading">
                  <h1>FANPAGE</h1>
                  <ul className="footer_list">
                    <li>
                      <Link className="footer_link" to="">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link className="footer_link" to="">
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="source_wrap">
            <p class="source">
              Copyright © 2022 WatchStore - Nguyen Chi Hien. Power by{" "}
              <a href="https://template-claten.mysapo.net/">Claten</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
