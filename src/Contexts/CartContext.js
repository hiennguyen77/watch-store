import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  //state

  const [productDetail, setProductDetail] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  console.log(productDetail);

  const handleAddProductToCart = (cartProduct, amountDetail) => {
    const foundIndex = cartProducts.findIndex(
      (prod) => prod.productId === cartProduct.productId
    );
    if (foundIndex === -1) {
      setCartProducts([
        ...cartProducts,
        { ...cartProduct, amount: amountDetail },
      ]);
      return;
    }
    cartProducts[foundIndex].amount += amountDetail;
    setCartProducts([...cartProducts]);
  };

  const setAmount = (productId, newAmount) => {
    // best practice
    // not yet, but it works
    const foundIndex = cartProducts.findIndex(
      (prod) => prod.productId === productId
    );
    if (foundIndex === -1) {
      console.log("khong the vao day duoc, vao duoc day thi co bug chac roi");
      return;
    }
    // by right, foundIndex always found, aka foundIndex always !== -1
    cartProducts[foundIndex].amount = newAmount;
    setCartProducts([...cartProducts]);
    //
  };

  const handleCheckout = (totalPrice) => {
    setTotalPrice(totalPrice);
  };

  const handleDeleteCart = (index) => {
    const newProductCart = [...cartProducts];
    newProductCart.splice(index, 1);
    setCartProducts(newProductCart);
  };

  //cartContextData
  const cartContextData = {
    handleAddProductToCart,
    amount: cartProducts.reduce((acc, cur) => acc + cur.amount, 0),
    cartProducts,
    setCartProducts,
    setProductDetail,
    productDetail,
    setAmount,
    handleDeleteCart,
    handleCheckout,
    totalPrice,
  };

  return (
    <>
      <cartContext.Provider value={cartContextData}>
        {children}
      </cartContext.Provider>
    </>
  );
};
export default CartContextProvider;
