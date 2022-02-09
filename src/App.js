import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
    setBusca("");
  }, [filteredProducts]);

  const showProducts = (filteredProducts) => {
    const filterInput = products.filter((item) => {
      setBusca(filteredProducts);
      return (
        item.name.toLowerCase().includes(filteredProducts.toLowerCase()) ||
        item.category.toLowerCase().includes(filteredProducts.toLowerCase())
      );
    });
    setProducts(filterInput);
    // setBusca("");
  };

  useEffect(() => {
    const sum = currentSale.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    setCartTotal(sum);
  }, [currentSale]);

  const deleteProduct = (productId) => {
    const findProduct = currentSale.find((item) => {
      return item.id === productId;
    });
    const index = currentSale.indexOf(findProduct);
    const newArr = [...currentSale];
    newArr.splice(index, 1);

    setCurrentSale(newArr);
  };

  const deleteAllProducts = () => {
    setCurrentSale([]);
  };

  return (
    <>
      {/* { setFilteredProducts, showProducts } */}
      <Header
        setFilteredProducts={setFilteredProducts}
        showProducts={() => showProducts(filteredProducts)}
        filteredProducts={filteredProducts}
      />
      {filteredProducts.length !== 0 ? (
        <h1>{`Resultados da busca por nome e categoria: ${busca}`}</h1>
      ) : (
        <h1>{`Resultados da busca por nome e categoria: `}</h1>
      )}

      <main>
        <ProductsList
          products={products}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          // deleteProduct={() => deleteProduct()}
          deleteProduct={deleteProduct}
          deleteAllProducts={deleteAllProducts}
        />
      </main>
    </>
  );
}

export default App;
