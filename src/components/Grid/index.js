import React from "react";

//Proptypes
import PropTypes from "prop-types";
//Styles
import { Wrapper, Content } from "./Grid.style";

const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h2>{header}</h2>
      <Content>{children}</Content>
    </Wrapper>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
  children: PropTypes.array,
};

export default Grid;
