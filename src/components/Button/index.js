import React from "react";

//Proptypes
import PropTypes from "prop-types";
//Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback, size }) => {
  return (
    <Wrapper size={size} type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
