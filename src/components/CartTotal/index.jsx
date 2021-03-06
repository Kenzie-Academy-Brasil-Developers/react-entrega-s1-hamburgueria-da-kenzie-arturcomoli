import "./styles.css";
import Button from "../Button";

const CartTotal = ({ cartTotal, deleteAllProducts }) => {
  const show = cartTotal.toFixed(2).replace(".", ",");

  return (
    <div className="container-total">
      <div className="cart-total-flex">
        <div className="show-price">
          <p>Total</p>
          <span>{`R$ ${show}`}</span>
        </div>
        <Button
          children={"Remover Todos"}
          className={"large large-total-green"}
          onClick={deleteAllProducts}
        ></Button>
      </div>
    </div>
  );
};

export default CartTotal;
