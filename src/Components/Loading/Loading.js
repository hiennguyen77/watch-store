import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./Loading.scss";
const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

export function Loading() {
  return (
    <>
      <div className="loading_wrap">
        <div className="loading_container">
          <Spin indicator={antIcon} />
        </div>
      </div>
    </>
  );
}
