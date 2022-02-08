import "./styles.css";
import Button from "../Button";

const CartTotal = ({ currentSale }) => {
  const total = currentSale.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  const show = total.toFixed(2).replace(".", ",");

  return (
    <div className="container-total">
      <div className="cart-total-flex">
        <div className="show-price">
          <p>Total</p>
          <span>{`R$: ${show}`}</span>
        </div>
        <Button
          children={"Remover Todos"}
          className={"large large-total-green"}
        ></Button>
      </div>
    </div>
  );
};

export default CartTotal;
