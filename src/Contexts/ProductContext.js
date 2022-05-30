import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  //state
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeName, setTypeName] = useState("Tất cả");
  const [productDetailName, setProductDetailName] = useState("");
  const [productDetailPrice, setProductDetailPrice] = useState();
  const [productDetailImg, setProductDetailImg] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);
  const [sortValue, setSortValue] = useState();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://6273e9663d2b5100742474a5.mockapi.io/products`
        );
        setProducts(res.data);
        setFilterProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProduct();
  }, []);

  const handleProduct = (item, typeName) => {
    const typeProducts = products.filter((typeProduct) => {
      return typeProduct.item === item;
    });
    setFilterProducts(typeProducts);
    setTypeName(typeName);
  };

  const handleProductDetail = (URL, name, price) => {
    setProductDetailImg(URL);
    setProductDetailName(name);
    setProductDetailPrice(price);
  };

  //Context data

  const productContextData = {
    handleProduct,
    handleProductDetail,
    products,
    filterProducts,
    setFilterProducts,
    typeName,
    setTypeName,
    loading,
    setLoading,
    productDetailName,
    productDetailPrice,
    productDetailImg,
    currentPage,
    setCurrentPage,
    productPerPage,
    sortValue,
    setSortValue,
    amount,
    setAmount,
  };

  //return Provider
  return (
    <productContext.Provider value={productContextData}>
      {children}
    </productContext.Provider>
  );
};
export default ProductContextProvider;
