import Button from "../Button";
import "./styles.css";

const Product = ({ id, name, category, price, img, addToCart }) => {
  const fixedPrice = price.toFixed(2).replace(".", ",");
  console.log(id);
  console.log(name);
  console.log(category);
  console.log(price);
  console.log(img);
  return (
    <li className="li-flex" key={id}>
      <div className="div-img">
        <img src={img} alt="" />
      </div>
      <div className="div-description">
        <h3>{name}</h3>
        <span className="category">{category}</span>
        <span className="price">{`R$ ${fixedPrice}`}</span>

        <Button
          children={"Adicionar"}
          className={"medium medium-green-product"}
          onClick={() => addToCart(id)}
        />
      </div>
    </li>
  );
};

export default Product;
