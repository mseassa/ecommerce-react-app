import { Route, Routes } from "react-router-dom";
import NavbarLogIn from "./Components/Utility/NavbarLogIn";
import HomePage from "./page/Home/HomePage";
import Footer from './Components/Utility/Footer';
import LogInPage from "./page/Auth/LogInPage";
import RegisterPage from './page/Auth/RegisterPage';
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrandPage from "./page/Brand/AllBrandPage";
import ShopProductsPage from './page/Products/ShopProductsPage';
import ProductdetailsPage from './page/Products/ProductdetailsPage';
import CartPage from "./page/Cart/CartPage";
import ChoosePayMethoudPage from "./page/Checkout/ChoosePayMethoudPage";


function App() {
  return (
    <div className="font">
      <NavbarLogIn />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/allcategory" element={<AllCategoryPage />}></Route>
        <Route path="/allbrand" element={<AllBrandPage />}></Route>
        <Route path="/products" element={<ShopProductsPage />}></Route>
        <Route path="/products/:id" element={<ProductdetailsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/order/paymethod" element={<ChoosePayMethoudPage />}></Route>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
