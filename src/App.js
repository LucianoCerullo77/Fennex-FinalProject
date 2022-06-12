
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Home from "./views/Home/Home"
import Cart from "./views/Cart/Cart"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"
import Checkout from "./views/Checkout/Checkout"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"




function App() {
  return (
      <BrowserRouter>
      <CartProvider>
      <Header/>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout/>}/>
        </Routes>
        <Footer/>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;