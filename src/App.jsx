import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategorySection from "./components/category/CategorySection";
import ProductSection from "./components/product/ProductSection";

const App = () => {
  return (
    <>
      <Header />
      <CategorySection />
      <ProductSection />
      <Footer />
    </>
  );
};

export default App;
