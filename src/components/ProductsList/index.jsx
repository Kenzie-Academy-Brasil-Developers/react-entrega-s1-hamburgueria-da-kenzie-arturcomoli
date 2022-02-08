import "./styles.css";
import Product from "../Product";

const ProductsList = ({ products, addToCart }) => {
  return (
    <ul className="list">
      {products.map(({ name, category, price, img, id }) => {
        return (
          <Product
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
