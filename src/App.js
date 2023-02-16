import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Products from "./components/Products";
import Header from "./components/Header";
import "./App.css";
import product from "./components/Product.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Header />} />
          <Route path="/" element={<Header />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Products/:pid" element={<ProductDetails />} />

          <Route path="/Products"element={<div className="App">{
                product.map((e, index) => {
                  return (
                    <Products
                      key={index}
                      id={index}
                      thumbnail={e.thumbnail}
                      title={e.title}
                      price={e.price}
                      brand={e.brand}
                      category={e.category}
                    />
                  );
                })}
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
