import "./styles.css";
import Product from "../Product";

const ProductsList = ({ products, setCurrentSale, currentSale }) => {
  const addToCart = (productId) => {
    console.log(productId);

    const findProduct = products.find((item) => {
      console.log(item.id);
      return item.id === productId;
    });
    console.log(findProduct);
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
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
