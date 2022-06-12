import "./ProductAccessories.scss";
import { ProductCard } from "../ProductCards/ProductCard";
import { SaleProductCard } from "../ProductCards/SaleProductCard";

import { memo } from "react";
// import axios from "axios";

function ProductAccessories(props) {
  const { products } = props;

  const accessoryPr = products.filter((product) => {
    return product.item === "accessory";
  });

  return (
    <>
      <div className="productAccessories_wrap">
        <div className="productAccessories_heading">
          <h1 className="productAccessories_name">Phụ kiện đồng hồ</h1>
        </div>
        <div className="productAccessories_container grid ">
          <div className="productAccessories_item row no-gutters ">
            {accessoryPr.map((productAccessories, index) =>
              productAccessories.salePrice ? (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  key={index}
                  className="accessory_body col l-3 m-4 c-6"
                >
                  <SaleProductCard
                    key={index}
                    name={productAccessories.name}
                    URL={productAccessories.URL}
                    price={productAccessories.price}
                    salePrice={productAccessories.salePrice}
                    productId={productAccessories.id}
                  />
                </div>
              ) : (
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  key={index}
                  className="accessory_body col l-3 m-4 c-6"
                >
                  <ProductCard
                    key={index}
                    name={productAccessories.name}
                    URL={productAccessories.URL}
                    price={productAccessories.price}
                    productId={productAccessories.id}
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
export default memo(ProductAccessories);
