import "./Blog.comp.scss";
import { Link } from "react-router-dom";

export const BlogComponent = () => {
  return (
    <>
      <div className="blogComp_wrap grid wide">
        <div className="blogComp_heading">
          <h1 className="blogComp_name">Bài viết mới nhất</h1>
        </div>
        <div class="blogComp_container row ">
          <div className="blogComp_item col l-4 m-4 c-12">
              <div class='blogComp_content'>
              <img
                className="blogComp_img"
                src="https://bizweb.dktcdn.net/thumb/large/100/438/171/articles/t8.jpg?v=1632731806863"
                alt=""
              />


            <Link className="blogComp_link" to="/blog">
              <h3>Cách chọn mua dây đồng hồ theo phong thủy bạn nên biết.</h3>
            </Link>
              <span>15/05/2022</span>
              <p>
                Người mệnh Kim Mặt đồng hồ có dạng hình tròn, hình oval, hình
                elip tượng trưng cho hành kim, bạn nên chọn những ...
              </p>
             </div> 
          </div>


          <div className="blogComp_item col l-4 m-4 c-12">
              <div class='blogComp_content'>
              <img
                className="blogComp_img"
                src="https://bizweb.dktcdn.net/thumb/large/100/438/171/articles/t8.jpg?v=1632731806863"
                alt=""
              />


            <Link className="blogComp_link" to="/blog">
              <h3>Cách chọn mua dây đồng hồ theo phong thủy bạn nên biết.</h3>
            </Link>
              <span>15/05/2022</span>
              <p>
                Người mệnh Kim Mặt đồng hồ có dạng hình tròn, hình oval, hình
                elip tượng trưng cho hành kim, bạn nên chọn những ...
              </p>
             </div> 
          </div>


          <div className="blogComp_item col l-4 m-4 c-12">
              <div class='blogComp_content'>
              <img
                className="blogComp_img"
                src="https://bizweb.dktcdn.net/thumb/large/100/438/171/articles/t8.jpg?v=1632731806863"
                alt=""
              />


            <Link className="blogComp_link" to="/blog">
              <h3>Cách chọn mua dây đồng hồ theo phong thủy bạn nên biết.</h3>
            </Link>
              <span>15/05/2022</span>
              <p>
                Người mệnh Kim Mặt đồng hồ có dạng hình tròn, hình oval, hình
                elip tượng trưng cho hành kim, bạn nên chọn những ...
              </p>
             </div> 
          </div>


        



       
        </div>
      </div>
    </>
  );
};
