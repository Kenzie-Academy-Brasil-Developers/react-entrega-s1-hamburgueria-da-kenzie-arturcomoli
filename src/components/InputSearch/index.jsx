import Button from "../Button";
import "./styles.css";

const InputSearch = ({
  setFilteredProducts,
  showProducts,
  filteredProducts,
  disabled,
}) => {
  return (
    <div className="div-input">
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => setFilteredProducts(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <Button
          onClick={showProducts}
          children={"Pesquisar"}
          className={"medium medium-disabled-input"}
          disabled={true}
        />
      ) : (
        <Button
          onClick={showProducts}
          children={"Pesquisar"}
          className={"medium medium-green-input"}
          disabled={false}
        />
      )}
    </div>
  );
};
export default InputSearch;
