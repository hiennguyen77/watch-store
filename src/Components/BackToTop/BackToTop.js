import "antd/dist/antd.css";
import { BackTop } from "antd";
import { AiOutlineUp } from "react-icons/ai";

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#d60f0f",
  color: "#fff",
  textAlign: "center",
  fontSize: 20,
};

export const BackToTop = () => (
  <BackTop>
    <div style={style}>
      <AiOutlineUp />
    </div>
  </BackTop>
);
