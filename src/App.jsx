import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import ProductHandlersHeader from "./components/ProductFilterHeader";
import Pagination from "./components/Pagination";
import Header from "./components/SiteHeader";
import Footer from "./components/Footer";
import { getProducts } from "./services/fakeProducts";
import ProductListCard from "./components/ProductListItem";
import MainProducts from "./components/MainProducts";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div>
      <Header />
      <MainProducts products={products}/>
      <Footer />
    </div>
  );
}

export default App;
