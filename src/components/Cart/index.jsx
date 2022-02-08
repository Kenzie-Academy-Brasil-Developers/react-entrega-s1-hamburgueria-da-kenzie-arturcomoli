import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import Empty from "../Empty";
import "./styles.css";

const Cart = ({ currentSale }) => {
  return (
    <>
      {currentSale.length === 0 ? (
        <div className="cart-container">
          <h3 className="cart-title">Carrinho de compras</h3>
          <Empty />
        </div>
      ) : (
        <div className="cart-container">
          <h3 className="cart-title">Carrinho de compras</h3>

          <ul>
            {currentSale.map(({ name, category, img, id }) => {
              console.log({ name, category, img, id });
              return (
                <CartProduct
                  name={name}
                  category={category}
                  img={img}
                  key={id}
                />
              );
            })}
          </ul>
          <CartTotal currentSale={currentSale} />
        </div>
      )}
    </>
  );
};

export default Cart;
