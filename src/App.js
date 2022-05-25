import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutHome from "./Components/Layout/LayoutHome/LayoutHome";
import { publicRoutes } from "./Routes/index";
import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const productContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [productType, setProductType] = useState("products");
  const [typeName, setTypeName] = useState("Tất cả");

  const handleProduct = (type, typeName) => {
    setProductType(type);

    setTypeName(typeName);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://6273e9663d2b5100742474a5.mockapi.io/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProduct();
  }, []);

  return (
    <productContext.Provider value={handleProduct}>
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
                      productType={productType}
                      typeName={typeName}
                    />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </productContext.Provider>
  );
}

export default App;
