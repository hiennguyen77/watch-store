import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutHome from "./Components/Layout/LayoutHome/LayoutHome";
import { publicRoutes } from "./Routes/index";
import { useContext } from "react";
import { productContext } from "./Contexts/ProductContext";
import { cartContext } from "./Contexts/CartContext";

function App() {
  const { products } = useContext(productContext);
  const { productDetailPrice, productDetailImg, productDetailName } =
    useContext(cartContext);

  return (
    <>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = LayoutHome;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page
                      products={products}
                      productDetailName={productDetailName}
                      productDetailPrice={productDetailPrice}
                      productDetailImg={productDetailImg}
                    />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
