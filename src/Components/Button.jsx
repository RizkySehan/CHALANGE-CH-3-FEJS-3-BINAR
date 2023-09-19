import PropTypes from "prop-types";

function Button({ bgColor, text, type, onClick }) {
  const className = `${
    bgColor === undefined ? "btn btn-primary" : bgColor
  } mt-2 w-100 fs-5`;

  return (
    <button
      bgColor={bgColor}
      onClick={onClick}
      type={type}
      className={className}
    >
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
