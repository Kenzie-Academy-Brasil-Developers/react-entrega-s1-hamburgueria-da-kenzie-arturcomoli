import "./styles.css";
import Product from "../Product";

const ProductsList = ({ products, setCurrentSale, currentSale }) => {
  const addToCart = (productId) => {
    const findProduct = products.find((item) => {
      return item.id === productId;
    });
    setCurrentSale([...currentSale, findProduct]);
  };

  return (
    <ul className="list">
      {products.map(({ name, category, price, img, id }) => {
        return (
          <Product
            id={id}
            key={id}
            name={name}
            category={category}
            price={price}
            img={img}
            addToCart={() => addToCart(id)}
            currentSale={currentSale}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
