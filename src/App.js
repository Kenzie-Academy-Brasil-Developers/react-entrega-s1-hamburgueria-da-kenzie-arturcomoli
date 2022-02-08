import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, [filteredProducts]);

  const showProducts = (filteredProducts) => {
    const filterInput = products.filter((item) => {
      return (
        item.name.toLowerCase().includes(filteredProducts.toLowerCase()) ||
        item.category.toLowerCase().includes(filteredProducts.toLowerCase())
      );
    });
    setProducts(filterInput);
  };

  return (
    <>
      {/* { setFilteredProducts, showProducts } */}
      <Header
        setFilteredProducts={setFilteredProducts}
        showProducts={() => showProducts(filteredProducts)}
      />
      <main>
        <ProductsList
          products={products}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
        <Cart currentSale={currentSale} />
      </main>
    </>
  );
}

export default App;
