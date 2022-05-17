import { useState } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./LayoutHome.scss";

function LayoutHome({ children }) {
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
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}
export default LayoutHome;
