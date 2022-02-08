import Button from "../Button";
import "./styles.css";

const InputSearch = ({ setFilteredProducts, showProducts }) => {
  return (
    <div className="div-input">
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => setFilteredProducts(e.target.value)}
      />
      <Button
        onClick={showProducts}
        children={"Pesquisar"}
        className={"medium medium-green-input"}
      />
    </div>
  );
};
export default InputSearch;
