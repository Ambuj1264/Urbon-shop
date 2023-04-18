import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Clothes from "./component/Clothes";
import "./component/Style.css";
import ViewProduct from "./component/ViewProduct";
import About from "./component/About";
import Login from "./component/Login";
import Register from "./component/Register";
import Forget from "./component/Forget";
import Reset from "./component/Reset";
import Protected from "./component/Protected";
import Cart from "./component/Cart";
import Payment from "./component/Payment";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Protected />}>
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/payment" element={<Payment></Payment>} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/ViewProduct/:id" element={<ViewProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Forget></Forget>} />
          <Route path="/reset/:token" element={<Reset />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
