import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./GlobalStyles/GlobalStyle";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { BackToTop } from "./Components/BackToTop/BackToTop";
import ProductContextProvider from "./Contexts/ProductContext";
import CartContextProvider from "./Contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <GlobalStyles>
          <Router>
            <ScrollToTop />
            <App />
            <BackToTop />
          </Router>
        </GlobalStyles>
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
