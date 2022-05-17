import { useState } from "react";

import Header from "../LayoutHome/Header/Header";
import Footer from "../LayoutHome/Footer/Footer";
import "./LayoutOther.scss";
import BreadCrumb from "../../Breadcrumb/Breadcrumb";

function LayoutOther({ children }) {
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
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default LayoutOther;
