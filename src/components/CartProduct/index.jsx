import "./styles.css";

const CartProduct = ({ name, category, img, id }) => {
  return (
    <li className="list-cart" key={id}>
      <div className="cart-img">
        <img src={img} alt={`Imagem do ${name}`} />
      </div>
      <div className="cart-info">
        <h3>{name}</h3>
        <span>{category}</span>
      </div>
      <div className="cart-remove">
        <span>Remover</span>
      </div>
    </li>
  );
};

export default CartProduct;
