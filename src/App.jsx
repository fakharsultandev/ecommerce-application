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

function App() {
  const [products, setProducts] = useState([]);
  const [viewType, setViewType] = useState("grid");

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const getProductViewClasses = () => {
    let classes = "grid gap-10 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-4 ";

    if (viewType === "list") return classes = "grid grid-cols-1 max-w-screen-lg gap-5 m-auto";
    return  classes += "grid-cols-4";
  }

  return (
    <div>
      <Header />
      <div className="w-full h-72 bg-transparent opacity-100 flex items-center justify-center mb-10 rounded-lg relative overflow-hidden max-md:h-44">
        <div className="w-full h-full bg-gradient-to-tr from-pink-500 to-sky-600 opacity-10 absolute "></div>
        <div className="text-center">
          <h1 className="text-zinc-900 text-5xl font-medium mb-2">
            New Arrivals
          </h1>
          <p className="text-zinc-700">
            Shop through our latest selection of Fashion
          </p>
        </div>
      </div>

      <div className="p-4 max-w-screen-2xl m-auto ">
        <ProductHandlersHeader  handleViewType={setViewType}/>
        <div className={getProductViewClasses()}>
          {products.map((p) =>
            viewType === "list" ? (
              <ProductListCard product={p} key={p.id} />
            ) : (
              <ProductCard product={p} key={p.id} />
            )
          )}
        </div>
        <Pagination totalPages={4} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
