import { ProductCard } from "./ProductCards/ProductCard";
import { SaleProductCard } from "./ProductCards/SaleProductCard";
import "./HotProduct.scss";

export function HotProduct(props) {
  const { products } = props;
  const hotProducts = products.slice(4, 12);

  // const type = [
  //   { name: "Đồng hồ nam", item: "male" },
  //   { name: "Đồng hồ nữ", item: "female" },
  //   { name: "Phụ kiện", item: "accessory" },
  // ];

  return (
    <>
      <div className="HotProduct_wrap">
        <div className="HotProduct_heading">
          <h1 className="HotProduct_name">Sản phẩm bán chạy</h1>
        </div>
        {/* <div className="HotProduct_type">
          {type.map((type, index) => (
            <button className="hotProduct_btn" key={index}>
              {type.name}
            </button>
          ))}
        </div> */}
        <div className="HotProduct_container grid ">
          <div className="HotProduct_item row no-gutters ">
            {hotProducts.map((hotProduct, index) =>
              hotProduct.salePrice ? (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className=" hotProduct_body col l-3 m-4 c-6 "
                  key={index}
                >
                  <SaleProductCard
                    name={hotProduct.name}
                    URL={hotProduct.URL}
                    price={hotProduct.price}
                    salePrice={hotProduct.salePrice}
                    productId={hotProduct.id}
                  />
                </div>
              ) : (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  className=" hotProduct_body col l-3 m-4 c-6 "
                  key={index}
                >
                  <ProductCard
                    name={hotProduct.name}
                    URL={hotProduct.URL}
                    price={hotProduct.price}
                    productId={hotProduct.id}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
