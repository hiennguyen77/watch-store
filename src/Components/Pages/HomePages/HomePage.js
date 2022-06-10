import "../../../Grid/Grid.css";
import "./HomePage.scss";
import { SaleProduct } from "../../Products/SaleProduct";
import { NewProduct } from "../../Products/NewProduct";
import { HotProduct } from "../../Products/HotProduct";
import { ProductForMen } from "../../Products/ProductTypes/ProductForMen";
import { ProductForWomen } from "../../Products/ProductTypes/productForWomen";
// import { ProductSmartWatch } from "../../Products/ProductTypes/ProductSmartWatch";
import ProductAccessories from "../../Products/ProductTypes/ProductAccessories";
import { Carousels } from "./Components/Carousel";
import { BlogComponent } from "../HomePages/Components/Blog.comp";
import { Loading } from "../../Loading/Loading";
import { productContext } from "../../../Contexts/ProductContext";
import { useContext } from "react";
function HomePage() {
  const { products, loading } = useContext(productContext);

  return (
    <>
      {loading && <Loading />}
      <div className="home_page_wrap">
        <div className="home_page_carousel">
          <Carousels className="carousel" />
        </div>
        <div className="home_page_container grid wide ">
          <NewProduct products={products} />
          <HotProduct products={products} />
          <ProductForMen products={products} />
          <ProductForWomen products={products} />
          {/* <ProductSmartWatch  /> */}
          <SaleProduct />
          <ProductAccessories products={products} />
          <BlogComponent />
        </div>
      </div>
    </>
  );
}
export default HomePage;
