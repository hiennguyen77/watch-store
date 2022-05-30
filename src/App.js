import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutHome from "./Components/Layout/LayoutHome/LayoutHome";
import { publicRoutes } from "./Routes/index";

import { useContext } from "react";
import { productContext } from "./Contexts/ProductContext";

function App() {
  const {
    products,
    productType,
    typeName,
    loading,
    setLoading,
    productDetailPrice,
    productDetailImg,
    productDetailName,
  } = useContext(productContext);

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
