import "./styles.css";
import Logo from "../Logo";
import InputSearch from "../InputSearch";

const Header = ({ setFilteredProducts, showProducts }) => {
  return (
    <header>
      <Logo />
      <InputSearch
        setFilteredProducts={setFilteredProducts}
        showProducts={showProducts}
      />
    </header>
  );
};
export default Header;
