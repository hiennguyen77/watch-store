import "../../../../Grid/Grid.css";
import { Link, NavLink } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { FaFacebookF, FaGoogle, FaTwitter, FaVimeoV } from "react-icons/fa";
import { FiLogIn, FiUserPlus, FiPhoneCall } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { HeaderMenuPr } from "./HeaderMenus/HeaderMenuPr";
import { HeaderMenuBrand } from "./HeaderMenus/HeaderMenuBrand";
import "./Header.scss";
import { cartContext } from "../../../../Contexts/CartContext";
import { useContext } from "react";

function Header(props) {
  const { amount } = useContext(cartContext);
  const { headerScroll } = props;
  return (
    <>
      <div
        class={
          headerScroll
            ? "header_wrap headerScroll "
            : "header_wrap headerDefault"
        }
      >
        <div className="header_container grid wide">
          <div className="header_content_top">
            <div className="social_icon">
              <p>Theo dõi:</p>
              <a href="abc" className="social_icon_item">
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="abc" className="social_icon_item">
                <i>
                  <FaGoogle />
                </i>
              </a>
              <a href="abc" className="social_icon_item">
                <i>
                  <FaTwitter />
                </i>
              </a>
              <a href="abc" className="social_icon_item">
                <i>
                  <FaVimeoV />
                </i>
              </a>
            </div>
            <div className="header_form">
              <Link to="/login" className="header_login">
                <i>
                  <FiLogIn />
                </i>
                Đăng nhập
              </Link>
              <Link to="/registration" className="header_registration">
                <i>
                  <FiUserPlus />
                </i>
                Đăng ký
              </Link>
            </div>
          </div>

          <div className="header_content_bottom">
            <div className="header_logo_cart">
              <div className="header_hotline">
                <i>
                  <FiPhoneCall />
                </i>
                <div>
                  <a href="aaa">
                    <p>Hotline</p>
                    <h6>098 227 770</h6>
                  </a>
                </div>
              </div>
              <div className="header_logo">
                <a href="/">
                  <h1>Wacth Store</h1>
                </a>
              </div>
              <div className="search_and_cart_container">
                <div className="header_search">
                  <Link to="/search" className="icon_search">
                    <i>
                      <BiSearch />
                    </i>
                  </Link>
                </div>

                <div className="header_cart">
                  <Link to="/cart">
                    <i>
                      <AiOutlineShoppingCart />
                    </i>
                  </Link>
                  <p className="circle">({amount})</p>
                </div>
              </div>
            </div>

            <div className="header_navigation_wrap">
              <div className="Navigation_wrap">
                <div className="Navigation_container">
                  <div className="Navigation_item">
                    <NavLink className="Navigation_link" to="/">
                      Trang chủ
                    </NavLink>
                  </div>

                  <div className="Navigation_item">
                    <Tippy
                      interactive
                      render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                          <HeaderMenuPr menuScroll={headerScroll} />
                        </div>
                      )}
                    >
                      <NavLink className="Navigation_link sudoEl" to="/product">
                        {" "}
                        Sản phẩm
                        <i>
                          <BsChevronDown className="down" />
                        </i>
                      </NavLink>
                    </Tippy>
                  </div>

                  <div className="Navigation_item">
                    <Tippy
                      interactive
                      render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                          <HeaderMenuBrand menuScroll={headerScroll} />
                        </div>
                      )}
                    >
                      <NavLink
                        className="Navigation_link sudoEl sudoElBrand"
                        to="/brand"
                      >
                        {" "}
                        nhãn hiệu
                        <i>
                          <BsChevronDown className="down" />
                        </i>
                      </NavLink>
                    </Tippy>
                  </div>

                  <div className="Navigation_item">
                    <Link className="Navigation_link" to="/about">
                      Giới thiệu
                    </Link>
                  </div>

                  <div className="Navigation_item">
                    <NavLink className="Navigation_link" to="/blog">
                      Blog
                    </NavLink>
                  </div>

                  <div className="Navigation_item">
                    <NavLink className="Navigation_link" to="/contact">
                      Liên hệ
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
