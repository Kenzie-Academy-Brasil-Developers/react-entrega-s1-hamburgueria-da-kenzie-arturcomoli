import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import Empty from "../Empty";

import "./styles.css";

const Cart = ({ currentSale, cartTotal, deleteProduct, deleteAllProducts }) => {
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
                  deleteProduct={deleteProduct}
                  productId={id}
                />
              );
            })}
          </ul>
          <CartTotal
            cartTotal={cartTotal}
            deleteAllProducts={deleteAllProducts}
          />
        </div>
      )}
    </>
  );
};

export default Cart;
