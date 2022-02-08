import Button from "../Button";
import "./styles.css";

const Product = ({ id, name, category, price, img, addToCart }) => {
  const fixedPrice = price.toFixed(2).replace(".", ",");

  return (
    <li className="li-flex" key={id} id={id}>
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
          onClick={addToCart}
        />
      </div>
    </li>
  );
};

export default Product;
