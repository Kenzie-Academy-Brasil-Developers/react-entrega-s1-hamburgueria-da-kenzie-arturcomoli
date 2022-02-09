import "./styles.css";
import Logo from "../Logo";
import InputSearch from "../InputSearch";

const Header = ({ setFilteredProducts, showProducts, filteredProducts }) => {
  return (
    <header>
      <Logo />
      <InputSearch
        setFilteredProducts={setFilteredProducts}
        showProducts={showProducts}
        filteredProducts={filteredProducts}
      />
    </header>
  );
};
export default Header;
