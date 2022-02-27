import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import About from "./components/about";
import Home from "./components/home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./components/catalog";
import Cart from "./components/cart";
import Admin from "./components/admin";

import GlobalState from "./store/globalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
