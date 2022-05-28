import "antd/dist/antd.css";
import "./Idea.scss";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};
export const Idea = () => {
  return (
    <>
      <div className="idea_wrap">
        <Tabs onChange={onChange} type="card">
          <TabPane tab="Thông số" key="1">
            <ul>
              <li>Thương hiệu: LONGINES</li>
              <li>Xuất xứ: Châu Âu</li>
              <li>Loại: Đồng hồ cơ</li>
              <li>Giới tính: nam/nữ</li>
              <li>Dịp tặng quà: Lễ, sinh nhât, ..</li>
              <li>
                Qùa tặng cho người thân: Em yêu, ông bà, cha mẹ, anh chị...
              </li>
            </ul>
          </TabPane>
          <TabPane tab="Đánh giá" key="2">
            Chưa có đánh giá nào.
          </TabPane>
          <TabPane tab="Bình luận" key="3">
            Chưa có bình luận nào.
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
