import PropTypes from "prop-types";

function Button(props) {
  const { bgColor, text, type, onClick } = props;

  const className = `${
    bgColor === undefined ? "btn btn-primary" : bgColor
  } mt-2 w-100`;

  return (
    <button
      // eslint-disable-next-line react/no-unknown-property
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
