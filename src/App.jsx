import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/SiteHeader";
import Footer from "./components/Footer";
import { getProducts } from "./services/fakeProducts";
import MainProducts from "./components/Products";

function App() {

  return (
    <div>
      <Header />
      <MainProducts/>
      <Footer />
    </div>
  );
}

export default App;
