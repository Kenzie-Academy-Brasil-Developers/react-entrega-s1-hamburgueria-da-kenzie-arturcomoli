import Button from "../Button";
import "./styles.css";

const Product = ({
  id,
  name,
  category,
  price,
  img,
  addToCart,
  currentSale,
  disabled,
}) => {
  const fixedPrice = price.toFixed(2).replace(".", ",");
  const findProduct = () => {
    const prod = currentSale.find((item) => item.id === id);
    return prod;
  };

  return (
    <li className="li-flex" key={id} id={id}>
      <div className="div-img">
        <img src={img} alt="" />
      </div>
      <div className="div-description">
        <h3>{name}</h3>
        <span className="category">{category}</span>
        <span className="price">{`R$ ${fixedPrice}`}</span>
        {!currentSale.includes(findProduct()) ? (
          <Button
            children={"Adicionar"}
            className={"medium medium-green-product"}
            onClick={addToCart}
          />
        ) : (
          <Button
            disabled={true}
            children={"Desativado"}
            className={"medium medium-product-disabled"}
            onClick={addToCart}
          />
        )}

        {/* // <Button 
        //   children={"Adicionar"}
        //   className={"medium medium-green-product"}
        //   onClick={addToCart}
        // />*/}
      </div>
    </li>
  );
};

export default Product;
