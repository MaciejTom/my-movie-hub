import React from "react";

//Proptypes
import PropTypes from "prop-types";
//Helpers
import { calcTime, convertMoney } from "../../helpers";
//Styles
import { Wrapper, Content, Column } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <Column>
          <p>Running time: {calcTime(time)}</p>
        </Column>
        <Column>
          <p>Budget: {convertMoney(budget)}</p>
        </Column>
        <Column>
          <p>Revenue: {convertMoney(revenue)}</p>
        </Column>
      </Content>
    </Wrapper>
  );
};

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
