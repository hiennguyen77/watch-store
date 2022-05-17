import { useState } from "react";

import Header from "../LayoutHome/Header/Header";
import Footer from "../LayoutHome/Footer/Footer";
import "./LayoutSearch.scss";
import BreadCrumb from "../../Breadcrumb/Breadcrumb";
import ProductPage from "../../Pages/ProductPages/ProductPage"
import {SearchPage} from "../../Pages/SearchPages/SearchPage"

function LayoutSearch({ children }) {
  const [headerScroll, setHeaderScroll] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 260) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  };
  window.addEventListener("scroll", changeHeader);

  return (
    <>
      <Header headerScroll={headerScroll} />

      <div
        className={
          headerScroll
            ? "layoutHome_container.layoutHomeScroll"
            : "layoutHome_container"
        }
      >
        <div className="content">
          <BreadCrumb />
          <SearchPage/>
          <ProductPage/>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default LayoutSearch;
