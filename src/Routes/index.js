import HomePage from "../Components/Pages/HomePages/HomePage";
import ProductPage from "../Components/Pages/ProductPages/ProductPage";
import AboutUsPage from "../Components/Pages/AboutUsPages/AboutUsPage";
import BlogPage from "../Components/Pages/BlogPages/BlogPage";
import ContactPage from "../Components/Pages/ContactPages/ContactPage";
import CartPage from "../Components/Pages/CartPages/CartPage";
import LoginPage from "../Components/Pages/LoginPages/LoginPage";
import RegistrationPage from "../Components/Pages/RegistrationPages/RegistrationPage";
import LayoutOther from "../Components/Layout/LayoutOthers/LayoutOther";
import { SearchPage } from "../Components/Pages/SearchPages/SearchPage";
import { ProductDetail } from "../Components/Pages/ProductDetailPage/ProductDetail";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/product", component: ProductPage, layout: LayoutOther },
  { path: "/about", component: AboutUsPage, layout: LayoutOther },
  { path: "/blog", component: BlogPage, layout: LayoutOther },
  { path: "/contact", component: ContactPage, layout: LayoutOther },
  { path: "/cart", component: CartPage, layout: LayoutOther },
  { path: "/Login", component: LoginPage, layout: LayoutOther },
  { path: "/registration", component: RegistrationPage, layout: LayoutOther },
  { path: "/search", component: SearchPage, layout: LayoutOther },
  { path: "/product_detail", component: ProductDetail, layout: LayoutOther },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
