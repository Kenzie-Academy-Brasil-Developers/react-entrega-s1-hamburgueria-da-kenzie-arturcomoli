import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import Empty from "../Empty";

import "./styles.css";

const Cart = ({ currentSale, cartTotal }) => {
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
            {currentSale.map(({ name, category, img, id, price }) => {
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
          <CartTotal cartTotal={cartTotal} />
        </div>
      )}
    </>
  );
};

export default Cart;
