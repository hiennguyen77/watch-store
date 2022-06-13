import "./Blog.comp.scss";
import { Link } from "react-router-dom";

export const BlogComponent = () => {
  return (
    <>
      <div className="blogComp_wrap grid ">
        <div className="blogComp_heading">
          <h1 className="blogComp_name">Bài viết mới nhất</h1>
        </div>

        <div className="blogComp_container row ">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col l-4 m-4 c-6"
          >
            <div className="blogComp_content">
              <Link className="blogComp_link" to="/blog">
                <img
                  className="blogComp_img"
                  src="https://bizweb.dktcdn.net/thumb/large/100/438/171/articles/t8.jpg?v=1632731806863"
                  alt=""
                />

                <h3>Cách chọn mua dây đồng hồ theo phong thủy bạn nên biết.</h3>
                <span>15/05/2022</span>
                <p>
                  Người mệnh Kim Mặt đồng hồ có dạng hình tròn, hình oval, hình
                  elip tượng trưng cho hành kim, bạn nên chọn những ...
                </p>
              </Link>
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col l-4 m-4 c-6"
          >
            <div className="blogComp_content">
              <Link className="blogComp_link" to="/blog">
                <img
                  className="blogComp_img"
                  src="https://bizweb.dktcdn.net/thumb/large/100/438/171/articles/t8.jpg?v=1632731806863"
                  alt=""
                />

                <h3>Cách chọn mua dây đồng hồ theo phong thủy bạn nên biết.</h3>
                <span>15/05/2022</span>
                <p>
                  Người mệnh Kim Mặt đồng hồ có dạng hình tròn, hình oval, hình
                  elip tượng trưng cho hành kim, bạn nên chọn những ...
                </p>
              </Link>
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col l-4 m-4 c-6"
          >
            <div className="blogComp_content">
              <Link className="blogComp_link" to="/blog">
                <img
                  className="blogComp_img"
                  src="https://bizweb.dktcdn.net/thumb/large/100/438/171/articles/t8.jpg?v=1632731806863"
                  alt=""
                />

                <h3>Cách chọn mua dây đồng hồ theo phong thủy bạn nên biết.</h3>
                <span>15/05/2022</span>
                <p>
                  Người mệnh Kim Mặt đồng hồ có dạng hình tròn, hình oval, hình
                  elip tượng trưng cho hành kim, bạn nên chọn những ...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
