import React from "react";
import PropTypes from "prop-types";

//STYLES
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
};

export default Button;
