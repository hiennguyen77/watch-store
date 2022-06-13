import { useState, useRef } from "react";

import "./HeaderSearch.scss";
export const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");
  const inputEl = useRef();
  const styleForm = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };

  const inputStyle = {
    border: "none",
    borderRadius: "4px",
    paddingLeft: "1rem",
    paddingTop: "0.4rem",
    paddingBottom: "0.4rem",
    backgroundColor: "#dfdfdf",
    outline: "none",
  };

  const handleSubmitSearchHeader = (e) => {
    e.preventDefault();
    alert(
      `Bạn đã tìm kiếm '${searchText}'. Xin lỗi ! Hiện tại chưa xử lí được yêu cầu`
    );
    setSearchText("");
    inputEl.current.focus();
  };

  return (
    <>
      <div className="headerSearch_wrap">
        <form style={styleForm} onSubmit={handleSubmitSearchHeader}>
          <input
            ref={inputEl}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            style={inputStyle}
            type="text"
            name="search"
            placeholder="Tìm kiếm..."
          />
        </form>
      </div>
    </>
  );
};
