import "./styles.css";

const Button = ({ children, className, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      children={children}
      className={className}
      disabled={disabled}
    ></button>
  );
};

export default Button;
